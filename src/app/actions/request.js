'use server'
import { SignupFormSchema } from '@/app/lib/definitions'
import {createSession} from '@/app/lib/session';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import  axios from '@/app/lib/axiosInstance';
export async function request(state, formData) {
    console.log('Form data:', formData);
    //validate the form data
    const validatedFields = SignupFormSchema.safeParse({
        email: formData.get('email'),
      
    });

   
    try {
        // Send the request and wait for the response
        const response = await axios.post('/account/request-password-reset', {
          email: formData.get('email'),
          Password : "",
          ConfirmPassword : ""
        });
      
        return {
            response: response.data.message,
        };
    

      
      } catch (error) {
        console.error('Error signing in:', error);
        return {
          errors:  'An error occurred. Please try again later.'
        };
      }
      


    
  
}