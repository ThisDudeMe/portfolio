import { useState } from 'react';
import emailjs from 'emailjs-com';
import profile from '../data/profile';

const useEmailJS = () => {
    const [status, setStatus] = useState({
        submitting: false,
        submitted: false,
        success: false,
        message: ''
    });

    const sendEmail = async (formData) => {
        setStatus({
            submitting: true,
            submitted: false,
            success: false,
            message: 'Sending...'
        });

        try {
            const { serviceId, templateId, userId } = profile.contact.emailService;

            // This is important - validate that EmailJS settings exist
            if (!serviceId || !templateId || !userId) {
                throw new Error('EmailJS configuration is missing. Please check your profile data.');
            }

            const response = await emailjs.send(
                serviceId,
                templateId,
                formData,
                userId
            );

            if (response.status === 200) {
                setStatus({
                    submitting: false,
                    submitted: true,
                    success: true,
                    message: 'Message sent successfully!'
                });
                return true;
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            console.error('Error sending email:', error);
            setStatus({
                submitting: false,
                submitted: true,
                success: false,
                message: `Failed to send message: ${error.message || 'Unknown error'}`
            });
            return false;
        }
    };

    return {
        status,
        sendEmail
    };
};

export default useEmailJS;