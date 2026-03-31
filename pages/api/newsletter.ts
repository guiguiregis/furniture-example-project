import { NextApiRequest, NextApiResponse } from 'next';
import axios, { AxiosError } from 'axios';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, locale, formId, sourceForm } = req.body;

  let url = '';

  const API_KEY = process.env.NEXT_PUBLIC_KLAVIYO_API_KEY;

  console.log({ formId, email });

  // Check which locale is in current url.
  if (locale === 'en') {
    url = `https://a.klaviyo.com/api/v2/list/${formId}/subscribe?api_key=${API_KEY}`;
  }

  if (locale === 'fr') {
    url = `https://a.klaviyo.com/api/v2/list/${formId}/subscribe?api_key=${API_KEY}`;
  }

  const listSource = `Signup Source`;

  // After check locale and add to url the properly link, send the
  // email to Klaviyo list.
  console.log(`url: ${url}`);
  try {
    const response = await axios.post(url, {
      profiles: [
        {
          email,
          [listSource]: sourceForm,
        },
      ],
    });

    console.log(`response: ${JSON.stringify(response)}`);

    return res.status(200).json(response.data);
  } catch (err) {
    const axiosError = err as AxiosError;
    console.log(`response: ${JSON.stringify(axiosError)}`);
    if (axiosError.response) {
      return res
        .status(axiosError.response.status)
        .json(axiosError.response.data);
    }
  }

  return res.status(200).json({});
}

export default handler;
