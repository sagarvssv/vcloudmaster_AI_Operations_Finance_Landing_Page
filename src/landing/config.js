// ------------------------------------------------------------------
// Edit event details here. They appear in both English and Arabic.
// ------------------------------------------------------------------
export const EVENT_DETAILS = {
  dubai: {
    date: '[EVENT DATE]',
    venue: '[VENUE, DUBAI]',
  },
  online: {
    date: '[WEBINAR DATE AND TIME]',
  },
};

export const CONTACT = {
  email: 'sales@vcloudmaster.com',
  website: 'https://www.vcloudmaster.com',
  websiteLabel: 'www.vcloudmaster.com',
};

// Where the registration form is sent (POST, JSON body).
// Set VITE_FORM_ENDPOINT in a .env file, e.g. your CRM / API / form service URL.
// If it is empty, the form shows the success state without sending anything (handy for local development).
export const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT || '';
