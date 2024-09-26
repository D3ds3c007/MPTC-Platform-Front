'use client'
import {signup} from '@/app/actions/auth'
import { MButton } from '../../Button/MButton'
import {useFormState, useFormStatus} from 'react-dom'
import styles from './Reset.module.css'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'; // Import useRouter for navigation
//import bootstrap css


export function ResetForm(){
    const [state, action] = useFormState(signup, undefined)
    const router = useRouter();

    useEffect(() => {
        if(state?.redirect){
            console.log('Redirecting to:', state.redirect)
            router.push(state.redirect)
        }
    })
    
    
    return(

        <>
            {/* <html className={styles.html}> */}
                <div className={styles.body}>
                    <div className={styles.wrapper}>
                    <div className={styles.fadeInDown}>
                        <div id={styles.formContent}>
                            <h2 className={`${styles.active} ${styles.title}`} >Forgot Password ?</h2>

                            {state?.errors && <p style={{
                                color:"red",
                                margin: "10px",
                                }}>{state.errors}</p>}

                                {/* Icon */}
                            {/* <div className={styles.fadeInFirst}>
                                <img src="http://danielzawadzki.com/codepen/01/icon.svg" id={styles.icon} alt="User Icon" />
                            </div> */}

                            {/* Login Form */}
                            <form action={action}>
                                <input type="text" id="login" className={`${styles.fadeInSecond} ${styles.input}`} name="email" placeholder="Email address" />
                                <SubmitButton />
                            </form>

                            


                            {/* Remind Password */}
                            <div id={styles.formFooter}>
                                <a className={styles.underlineHover} href="/authentication">Sign In</a>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            {/* </html> */}

        </>
    )
}

function SubmitButton(){
    const { pending } = useFormStatus()

    return(
        <MButton disabled={pending} type="submit">
            {pending ? 'Loading...' : 'Reset Password'}
        </MButton>
    )
}