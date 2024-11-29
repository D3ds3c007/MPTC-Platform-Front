'use client'
import {signup} from '@/app/actions/auth'
import { MButton } from '../../Button/MButton'
import {useFormState, useFormStatus} from 'react-dom'
import styles from './SignIn.module.css'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'; // Import useRouter for navigation
import { MLoading } from '@/app/components/ui/Loading/MLoading'
import MPopupMessage from '@/app/components/ui/PopupMessage/MPopupMessage';
import { useState } from "react";
import { set } from 'react-hook-form'

//import bootstrap css


export function SignInForm(){
    const [state, action] = useFormState(signup, undefined)
    const router = useRouter();
    const [isVisible, setIsVisible] = useState(false);

    const [popupType, setPopupType] = useState("success");
    const [message, setMessage] = useState("");



    useEffect(() => {
        if(state?.redirect){
            console.log('Redirecting to:', state.redirect)
            setPopupType("success")
            setMessage("Login successful. Redirecting ...");
            showPopup("success");

            router.push(state.redirect)
        }

        if(state?.errors)
        {
            setMessage(state.errors)
            showPopup("error");
        }

    }, [state, router])
    
  

    const showPopup = (type) => {
        setPopupType(type);
        setIsVisible(true);
      };
    
    return(

        <>
            {/* <html className={styles.html}> */}
                <div className={styles.body}>
                    <div className={styles.wrapper}>
                    <div className={styles.fadeInDown}>
                        <div id={styles.formContent}>
                            <h2 className={`${styles.active} ${styles.title}`} >Sign In</h2>
                                {/* Icon */}
                            {/* <div className={styles.fadeInFirst}>
                                <img src="http://danielzawadzki.com/codepen/01/icon.svg" id={styles.icon} alt="User Icon" />
                            </div> */}

                            {/* Login Form */}
                            <form action={action}>
                                <input type="text" id="login" className={`${styles.fadeInSecond} ${styles.input}`} name="email" placeholder="login" />
                                <input type="text" id="password" className={`${styles.fadeInThird} ${styles.input} `} name="password" placeholder="password" />
                                <SubmitButton />
                            </form>

                            


                            {/* Remind Password */}
                            <div id={styles.formFooter}>
                                <a className={styles.underlineHover} href="/accounts/request-reset-password">Forgot Password?</a>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            {/* </html> */}

            {/* Error Popup Message */}
            
                <MPopupMessage
                    type={popupType}
                    title={popupType === "success" ? "Well done!" : "Oh snap!"}
                    message={message}
                    isVisible={isVisible}
                    onClose={() => setIsVisible(false)}
                />
            

        </>
    )
}

function SubmitButton(){
    const { pending } = useFormStatus()
    console.log(pending);

    return(
        <>
      
             <MButton disabled={pending} type="submit">
                {pending ? "Loading ..." : "Sign In  "}
            </MButton>
            
         
         
        </>
    )

      
}