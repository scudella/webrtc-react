import axios from 'axios'

const productionUrl = 'https://localhost:5000/api/v1'

export const customFetch = axios.create({
  baseURL: productionUrl,
  withCredentials: true,
})
