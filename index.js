// Load environment variables from the .env file
require('dotenv').config();

const axios = require('axios');

// URL for the Google Geolocation API
const url = 'https://www.googleapis.com/geolocation/v1/geolocate';

// Retrieve API key from environment variables
const apiKey = process.env.API_KEY; // This gets the API key from the .env file

if (!apiKey) {
  console.error('API Key is missing. Please check your .env file.');
  process.exit(1); // Exit the program if API key is not set
}

// JSON body data (same as your original curl request)
const data = {
  homeMobileCountryCode: 310,
  homeMobileNetworkCode: 410,
  radioType: 'gsm',
  carrier: 'Vodafone',
  considerIp: true
};

// POST request to the Google Geolocation API
axios.post(`${url}?key=${apiKey}`, data, {
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => {
  console.log('Geolocation Response:', response.data);
})
.catch(error => {
  console.error('Error:', error.response ? error.response.data : error.message);
});
