import axios from 'axios';

const API_KEY = '6ad955ebec835329c7d3b258d8ddb8c7';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'; 
// keep action types consistent between action creators and reducers

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url); // returns a promise


    return {
        type: FETCH_WEATHER,
        payload: request
    };
}