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
  catch (error) {
    console.error(error);
    return null;
  }
}

export const getBranches = async () => {
  try {
    const response = await api.get('/branches');
    return response.data;
  }
  catch (error) {
    console.error(error);
    return [];
  }
}

export const getCommitsByBranch = async (branchId) => {
  try {
    const response = await api.get('/commits', { branchId: branchId });
    return response.data;
  }
  catch (error) {
    console.error(error);
    return [];
  }
}

export const getCommitsByDescription = async (description) => {
  try {
    const response = await api.get('/commits', { q: `message:${description}` });
    return response.data;
  }
  catch (error) {
    console.error(error);
    return [];
  }
}