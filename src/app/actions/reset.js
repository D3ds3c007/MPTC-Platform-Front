'use server'
import { SignupFormSchema } from '@/app/lib/definitions'
import  axios from '@/app/lib/axiosInstance';
export async function reset(state, formData) {
    console.log('Form data:', formData);
    //validate the form data
    const validatedFields = SignupFormSchema.safeParse({
        email: formData.get('email'),
    });

   
    try {
        // Send the request and wait for the response
        const response = await axios.put('/account/request-password-reset', {
          email: formData.get('email'),
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