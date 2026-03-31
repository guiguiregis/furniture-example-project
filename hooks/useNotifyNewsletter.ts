import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';

export const useNotifyNewsletter = (klaviyoId: string, sourceForm?: string) => {
  const router = useRouter();

  const [openEmailError, setOpenEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [emailSubscribed, setEmailSubscribed] = useState(false);
  const [emailLoading, setEmailLoading] = useState(false);

  const validateInput = useCallback((text: string) => {
    if (!text) return false;
    // eslint-disable-next-line no-useless-escape
    const reg = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/;
    if (reg.test(text) === false) {
      return false;
    }

    return true;
  }, []);

  // Function to add Email to Klaviyo List
  const handleNewsletter = async (emailInput: string) => {
    setEmailLoading(true);
    if (!validateInput(emailInput)) {
      setEmailErrorMessage('Invalid input');
      console.log('VALIDATE: ', emailInput, validateInput(emailInput));
      setEmailLoading(false);
      return;
    }

    // Get input with name Email
    const email = emailInput;
    // Check if Email input has any value.
    if (email) {
      try {
        await axios.post('/api/newsletter', {
          locale: 'en',
          email,
          formId: klaviyoId,
          sourceForm: sourceForm || 'n/a',
        });

        setEmailSubscribed(true);
      } catch (err) {
        const axiosError = err as AxiosError;
        // If response is not successful open the Snackbar and set the error message.

        if (axios.isAxiosError(axiosError)) {
          if (axiosError.response) {
            setOpenEmailError(true);
            // @ts-ignore
            setEmailErrorMessage(axiosError.response.data.detail);
          }
        } else {
          setOpenEmailError(true);
          setEmailErrorMessage('Unusual response - something went wrong');
        }
      }
    }
    setEmailErrorMessage('');
    setEmailLoading(false);
  };

  const handleEmailErrorClose = () => {
    setEmailErrorMessage('');
  };

  return {
    openEmailError,
    emailErrorMessage,
    emailSubscribed,
    emailLoading,
    handleEmailErrorClose,
    handleNewsletter,
  };
};
