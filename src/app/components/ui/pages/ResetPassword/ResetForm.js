'use client'
import {reset} from '@/app/actions/reset'
import { MButton } from '../../Button/MButton'
import {useFormState, useFormStatus} from 'react-dom'
import styles from './ResetForm.module.css'
import { useRouter } from 'next/navigation'; // Import useRouter for navigation
import  axios from '@/app/lib/axiosInstance';
import { useEffect, useState } from 'react'
import { set } from 'zod'

//import bootstrap css


export function ResetForm(){
    const [state, action] = useFormState(reset, undefined);
    const[isValidToken, setIsValidToken] = useState(null);
    const[userIdFromQuery, setUserIdFromQuery] = useState(null);
    const[tokenFromQuery, setTokenFromQuery] = useState(null);
    const router = useRouter();



    useEffect(() => {
        const validateToken = async () => {
            //Extract UserId and token from the url
            const urlParams = new URLSearchParams(window.location.search);
            const userId = urlParams.get('userId');
            const token = urlParams.get('token');

            if(!userId || !token){
                console.log(urlParams['userId'], urlParams['token']);
                console.log("userId not found");
                router.push('/accounts/request-reset-password');
                return;
            }

            setUserIdFromQuery(userId);
            setTokenFromQuery(token);

            try{
                const response = await axios.get('/account/verify-reset-token', {
                    params: {
                        userId: userId,
                        token: token,
                    },
                });
                
                console.log(response.status + "hehe");
                if(response.status === 200){
                    console.log('Token is valid');
                    setIsValidToken(true);
                    return;
                }

                if(response.status === 401){
                    console.log('Token is not valid');
                    setIsValidToken(false);
                    return;
                }
            }catch(error){
                setIsValidToken(false);
                return;
            }        
                
          
        };

        validateToken();
    }, [router]);

    
    

    
    
    
    return(
      
        <>
            {/* <html className={styles.html}> */}
                <div className={styles.body}>
                    <div className={styles.wrapper}>
                    <div className={styles.fadeInDown}>
                        <div id={styles.formContent} style={{padding : "40px"}}>
                            {isValidToken === null && <p>Loading...</p>}
                            {isValidToken === false && <p style={{color:"red"}}>Your token is invalid or expired <a href='\accounts\authentication'>Go back</a></p>}
                            {isValidToken === true && 
                            <>
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
                                    {state?.response && <p style={{
                                        color:"green",
                                        margin: "10px",
                                        }}>{state.response}</p>}
                                    
                                    <form action={action}>
                                        <input type="password" id="login" className={`${styles.fadeInSecond} ${styles.input}`} 
                                        style={{
                                            marginBottom : "15px",
                                            marginTop: "15px"
                                        }} 
                                        name="password" placeholder="New password" />

                                        <input type="password" id="login" className={`${styles.fadeInSecond} ${styles.input}`} 
                                                                        style={{
                                                                            marginBottom : "15px",
                                                                            marginTop: "15px"
                                                                        }} 
                                                                        name="confirmPassword" placeholder="Confirm your password" />
                                        <div style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            gap: "15px",
                                            marginTop: "15px"
                                        }}>

                                        <input type="hidden" name="userId" value={userIdFromQuery} />
                                        <input type="hidden" name="token" value={tokenFromQuery} />
                                            <SubmitButton />
                                            <a href='\accounts\authentication'><CancelButton /></a>
                                        </div>
                                        
                                    </form>
                                    {/* Remind Password */}
                                
                                </>}
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
        <MButton disabled={pending} type="submit" variant='primary'>
            {pending ? 'Loading...' : 'Save'}
        </MButton>
    )
}

function CancelButton(){
    const { pending } = useFormStatus()

    return(
        <MButton disabled={pending} variant='default'>
            {pending ? 'Loading...' : 'Cancel'}
        </MButton>
    )
}
