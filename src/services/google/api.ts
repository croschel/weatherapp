import axios from 'axios';

export const googleAPI = axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api/geocode/json',
});
