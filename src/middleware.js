import { NextResponse } from "next/server";
import {decrypt} from '@/app/lib/session'
import {cookies} from 'next/headers'

export async function middleware(req){

    const cookie = cookies().get('session')?.value;
    const url = req.nextUrl.clone();

    //ignore request if url is /
    if(url.pathname === '/'){
        return NextResponse.next(url);
    }

    if(url.pathname.startsWith('/authentication') && cookie){
        try {
            const session = await decrypt(cookie);
            return NextResponse.redirect(new URL(session.url, req.nextUrl))
            
        } catch (error) {
            return NextResponse.redirect(new URL('/authentication', req.nextUrl))
            
        }
    }
    if(!cookie && url.pathname.startsWith('/dashboard')){
        return NextResponse.redirect(new URL('/accounts/authentication', req.nextUrl))
    }else{
        try {
            const session = await decrypt(cookie);
            //check session role value and compare to route /dashboard/administrator and so on using switch case
            if(url.pathname.startsWith('/dashboard/administrator') && session.role !== 'administrator'){
                return NextResponse.redirect(new URL('/authentication', req.nextUrl))
            }
            if(url.pathname.startsWith('/dashboard/professor') && session.role !== 'professor'){
                return NextResponse.redirect(new URL('/authentication', req.nextUrl))
            }
          
        } catch (error) {
            return NextResponse.redirect(new URL('/authentication', req.nextUrl))
        }
        

    }
}