import axios from 'axios';  // Import the axios library for making HTTP requests

// Define a constant for the base URL of the YouTube v3 API hosted on RapidAPI
export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

// Define default options for all axios requests made using this instance
const options = {
  params: {
    maxResults: 50,  // Set the maximum number of results returned from the API to 50
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,  // Use the API key stored in environment variables
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',  // Specify the host for the RapidAPI YouTube v3 API
  },
};

// Define and export an asynchronous function to fetch data from the API
export const fetchFromAPI = async (url) => {
  // Append the endpoint (url) to the BASE_URL and send a GET request with the specified options
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;  // Return the data from the response
};
