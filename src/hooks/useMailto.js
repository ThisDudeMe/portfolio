import { useCallback } from 'react';

/**
 * Custom hook for generating and handling mailto links
 * @returns {Object} Methods for email functionality
 */
const useMailto = () => {
    /**
     * Creates a formatted mailto link with subject and body
     * @param {string} email - Email address
     * @param {string} subject - Optional email subject
     * @param {string} body - Optional email body
     * @returns {string} Formatted mailto URL
     */
    const createMailtoLink = useCallback((email, subject = '', body = '') => {
        const encodedSubject = encodeURIComponent(subject);
        const encodedBody = encodeURIComponent(body);

        let mailtoUrl = `mailto:${email}`;

        // Add subject and body if provided
        const params = [];
        if (subject) params.push(`subject=${encodedSubject}`);
        if (body) params.push(`body=${encodedBody}`);

        // Add parameters to the mailto URL
        if (params.length > 0) {
            mailtoUrl += `?${params.join('&')}`;
        }

        return mailtoUrl;
    }, []);

    /**
     * Opens the default email client with prefilled information
     * @param {string} email - Email address
     * @param {string} subject - Optional email subject
     * @param {string} body - Optional email body
     */
    const openMailClient = useCallback((email, subject = '', body = '') => {
        const mailtoUrl = createMailtoLink(email, subject, body);
        window.location.href = mailtoUrl;
    }, [createMailtoLink]);

    return {
        createMailtoLink,
        openMailClient
    };
};

export default useMailto;