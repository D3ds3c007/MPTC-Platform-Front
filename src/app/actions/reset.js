'use server'
import { SignupFormSchema } from '@/app/lib/definitions'
import  axios from '@/app/lib/axiosInstance';
export async function reset(state, formData) {
    console.log('Form data:', formData);
    //validate the form data
    // const validatedFields = SignupFormSchema.safeParse({
    //     email: formData.get('email'),
    // });

    const userId = formData.get('userId');
    const token = formData.get('token');


    console.log(formData.get('password'));

   
    try {
        // Send the request and wait for the response
        const response = await axios.put('/account/reset-password?userId='+userId+'&code='+token , {
          email: "",
          password: formData.get('password'),
          confirmPassword: formData.get('confirmPassword')
        });

        console.log(response.status);
      
        return {
            response: response.data.message,
        };
    

      
      } catch (error) {
        console.error('Error signing in:', error);
        return {
          errors:  error.response.data
        };
      }
      


    
  
}