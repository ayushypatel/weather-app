import axios from 'axios';

const API_KEY = '334e2248e006491d8a095630242708';
const BASE_URL = 'http://api.weatherapi.com/v1';

export const getCurrentWeather = async (city) => {
    try {
        const response = await axios.get(`${BASE_URL}/current.json`, {
            params: {
                key: API_KEY,
                q: city,
                aqi: 'no'
            }
        });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data.error.message : error.message;
    }
};
export const getFiveDayForecast = async (city) => {
    try {
        const response = await axios.get(`${BASE_URL}/forecast.json`, {
            params: {
                key: API_KEY,
                q: city,
                days: 7,
                aqi: 'no',
                alerts: 'no'
            }
        });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data.error.message : error.message;
    }
};
