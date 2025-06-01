import axios from 'axios';

const BASE_URL = 'https://bridgeit.cisco.com/api';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Client-ID': 'cG9jLXRyaWFsMjAyNU1heTIy-3a782380338929216ce751de3e2c8b',
    'Client-Secret': 'z6dPcu2sASpSNh02_SwfOaQ5IsgwFYY0lSwvmLrL_RZk7Xkv7vLAmBn3RSd73yeq',
    'App-Key': 'hackathon-ciscoit-fy25-team-25',
    'Content-Type': 'application/json'
  }
});

// Example API call
export const fetchEmails = async () => {
  try {
    const res = await instance.get('/emails');
    return res.data;
  } catch (err) {
    console.error('API Error:', err);
    return null;
  }
};
