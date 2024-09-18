'use server'
import 'server-only'
import {SignJWT, jwtVerify} from 'jose'
import { cookies } from 'next/headers'

const secretKey = process.env.SESSION_SECRET
const encodedKey = new TextEncoder().encode(secretKey)

export async function encrypt(payload){
    return new SignJWT(payload)
        .setProtectedHeader({alg: 'HS256'})
        .setIssuedAt()
        .setExpirationTime('1h')
        .sign(encodedKey)
}

export async function decrypt(session)
{
    try{
        const {payload} = await jwtVerify(session, encodedKey, {algorithms: ['HS256']})
        return payload
    } catch(e){
        console.error('Error decrypting session:', e)
        return null
    }
}

export async function createSession(payload){
    const expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24 * 7)
    const session = await encrypt({...payload, expiresAt})

    cookies().set('session', session, {
        expires: expiresAt,
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
    })
}

export async function destroySession(){
    cookies().set('session', '', {
        expires: new Date(0),
        httpOnly: true,
        sameSite: 'lax',
    })
}