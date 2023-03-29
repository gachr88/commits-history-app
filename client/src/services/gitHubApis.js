import axios from 'axios';


const BASE_URL = process.env.REACT_APP_GITHUB_API_URL;

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });


export const getRepository = async () => {
    try {
        const response = await api.get('/repository');     
        return response.data;
    }
    catch(error) {
        console.error(error);
    }
    
}