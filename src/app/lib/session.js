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
        console.log('Decrypted session:', payload)

        return payload
    } catch(e){
        console.error('Error decrypting session:', e)
        return null
    }
}

export async function createSession(session){
    //set the session cookie to expire in 1 hour
    const expiresAt = new Date()
    expiresAt.setHours(expiresAt.getHours() + 1)

    cookies().set('session', session, {
        expires: expiresAt,
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
    })

    //decrypt the session and log the decrypted session
    const decryptedSession = await decrypt(session)
    //set the redirect URL to localstorage
    cookies().set('redirect', decryptedSession.url, {
        expires: expiresAt,
        httpOnly: false,
        sameSite: 'lax',
    })
}

export async function destroySession(){
    cookies().set('session', '', {
        expires: new Date(0),
        httpOnly: true,
        sameSite: 'lax',
    })
}