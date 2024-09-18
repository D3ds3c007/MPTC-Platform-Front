import { SignupFormSchema } from '@/app/lib/definitions'
import {createSession} from '@/app/lib/session'
import { redirect } from 'next/navigation';

export async function signup(state, formData) {
    console.log('Form data:', formData);
    //validate the form data
    const validatedFields = SignupFormSchema.safeParse({
        email: formData.get('email'),
        password: formData.get('password')
    });

    //if the form data is invalid, return early
    if(!validatedFields.success){
        console.log('Form data is invalid');
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    let role = null;
    if(formData.get('email') === 'raitra007@gmail.com' && formData.get('password') === '12345678'){
        role = 'administrator';
    } else {
        role = 'professor';
    }


    await createSession({userId: 1, role: role, url : '/dashboard/'+role});
    redirect('/dashboard/'+role);
  
}