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
    console.log('Form data is valid');

    let role = null;
    if(formData.get('email') === 'raitra007@gmail.com'){
        role = 'admin';
    } else {
        role = 'user';
    }


    await createSession({userId: 1, role: role});


        
    if(role === 'admin'){
        redirect('/dashboard/administrator')
    }else{
        redirect('/dashboard/professor')
    }
}