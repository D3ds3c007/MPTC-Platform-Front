'use server'
import { SignupFormSchema } from '@/app/lib/definitions'
import {createSession} from '@/app/lib/session';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import  axios from '@/app/lib/axiosInstance';
export async function signup(state, formData) {
    console.log('Form data:', formData);
    //validate the form data
    const validatedFields = SignupFormSchema.safeParse({
        email: formData.get('email'),
        password: formData.get('password')
    });

    //if the form data is invalid, return early
    // if(!validatedFields.success){
    //     console.log('Form data is invalid');
    //     return {
    //         errors: validatedFields.error.flatten().fieldErrors,
    //     }
    // }

    try {
        // Send the request and wait for the response
        const response = await axios.post('/authentication/', {
          email: formData.get('email'),
          password: formData.get('password')
        });
      
        // Extract the token from the response
        const { token } = response.data;
        console.log('Token:', token);
      
        // Create session using the token
        await createSession(token);
      
        // Now that the session is created, get the redirect URL from cookies
        const redirectUrl = cookies().get('redirect').value;
      
      // Return the redirect response
        return {
            redirect: redirectUrl, // Properly format the redirect response
        };

      
      } catch (error) {
        console.error('Error signing in:', error);
        return {
          errors:  'An error occurred. Please try again later.'
        };
      }
      


    
  
}