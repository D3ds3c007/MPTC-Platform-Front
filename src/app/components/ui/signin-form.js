'use client'
import {signup} from '@/app/actions/auth'
import {useFormState, useFormStatus} from 'react-dom'
//import bootstrap css


export function SigninForm(){
    const [state, action] = useFormState(signup, undefined)
    return(
        <form action={action}>
            <div>
                <label>Email</label>
                <input type="email" name="email" placeholder='Email' />
            </div>
            {/* {state?.errors.email && <p>{state.errors.email}</p>} */}

            <div>
                <label>Password</label>
                <input type="password" name="password" placeholder='Password' />
            </div>
            {/* {state?.errors.password && (
                <div>
                    <p>Password must : </p>
                    <ul>
                        {state.errors.password.map((error) => (
                            <li key={error} >{error}</li>
                        ))}
                    </ul>
                </div>
            )} */}
            <SubmitButton />
        </form>
    )
}

function SubmitButton(){
    const { pending } = useFormStatus()

    return(
        <button disabled={pending} type="submit">
            {pending ? 'Loading...' : 'Sign In'}
        </button>
    )
}