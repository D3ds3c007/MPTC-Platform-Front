'use client'
import {signup} from '@/app/actions/auth'
import { MButton } from '../../Button/MButton'
import {useFormState, useFormStatus} from 'react-dom'
import logo from '@/app/components/ui/SideBar/logo.png'
import Image from 'next/image';
import styles from './SignIn.module.css'
//import bootstrap css


export function SignInForm(){
    const [state, action] = useFormState(signup, undefined)
    return(
        // <form action={action}>
        //     <div>
        //         <label>Email</label>
        //         <input type="email" name="email" placeholder='Email' />
        //     </div>
        //     {/* {state?.errors.email && <p>{state.errors.email}</p>} */}

        //     <div>
        //         <label>Password</label>
        //         <input type="password" name="password" placeholder='Password' />
        //     </div>
        //     {/* {state?.errors.password && (
        //         <div>
        //             <p>Password must : </p>
        //             <ul>
        //                 {state.errors.password.map((error) => (
        //                     <li key={error} >{error}</li>
        //                 ))}
        //             </ul>
        //         </div>
        //     )} */}
        //     <SubmitButton />
        // </form>
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
                                <a className={styles.underlineHover} href="#">Forgot Password?</a>
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
        <MButton disabled={pending} type="submit" >
            {pending ? 'Loading...' : 'Sign In'}
        </MButton>
    )
}