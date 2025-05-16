'use client'
import {request} from '@/app/actions/request'
import { MButton } from '../../Button/MButton'
import {useFormState, useFormStatus} from 'react-dom'
import styles from './Request.module.css'
import MPopupMessage from '@/app/components/ui/PopupMessage/MPopupMessage';
import { useEffect, useState } from 'react'

//import bootstrap css


export function RequestForm(){
    const [state, action] = useFormState(request, undefined)

    const [isVisible, setIsVisible] = useState(false);
    
    const [popupType, setPopupType] = useState("success");
    const [message, setMessage] = useState("");
    
    useEffect(() => {
        if(state?.errors)
        {
            setMessage(state.errors)
            showPopup("error");
        }
    }, [state])

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
                            <h2 className={`${styles.active} ${styles.title}`} >Forgot Password ?</h2>

                                {/* Icon */}
                            {/* <div className={styles.fadeInFirst}>
                                <img src="http://danielzawadzki.com/codepen/01/icon.svg" id={styles.icon} alt="User Icon" />
                            </div> */}

                            {/* Login Form */}
                            {state?.response && <p style={{
                                color:"green",
                                margin: "10px",
                                }}>{state.response}</p>}
                            
                            <form action={action}>
                                <input type="text" id="login" className={`${styles.fadeInSecond} ${styles.input}`} 
                                style={{
                                    marginBottom : "15px",
                        
                                }} 
                                name="email" placeholder="Email address" />
                                
                                <SubmitButton />
                            </form>
                            {/* Remind Password */}
                            <div id={styles.formFooter}>
                                <a className={styles.underlineHover} href="/accounts/authentication">Sign In</a>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            {/* </html> */}
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

    return(
        <MButton disabled={pending} type="submit">
            {pending ? 'Loading...' : 'Reset Password'}
        </MButton>
    )
}