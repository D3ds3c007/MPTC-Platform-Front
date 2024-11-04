'use server'

import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import axios from '@/app/lib/axiosInstance';

export async function sendExamForm(state, formData) {
    console.log('Form data:', formData);

    // Get the session cookie
    const session = cookies().get('session');
    // console.log("session: " + JSON.stringify(session));

    try {
        // Await the response from the axios post request
        const response = await axios.post('Exam/create-exam', formData, {
            headers: {
                'Authorization': `Bearer ${session?.value}`
            },
        });

        // Check if the response status indicates success
        if (response.status !== 200) {
            throw new Error('File upload failed');
        }

        // Log the result if the request is successful
        console.log('Data sent successfully:', response.data);
        // You can add an alert or redirect here if needed

    } catch (error) {
        console.error('Error:', error);
        // Handle error (you can alert the user or log the error)
    }
}
