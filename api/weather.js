import axios from 'axios';

const CONDITION_BASE_URL = 'http://api.wunderground.com/api/f029e46fd0232d12/geolookup/conditions/q/Australia/';
const FORECAST_BASE_URL = 'http://api.wunderground.com/api/f029e46fd0232d12/geolookup/forecast10day/q/Australia/';


export function fetchConditionData(city) {
    return axios.get(`${CONDITION_BASE_URL}${city}.json `)
        .then(res => res.data.current_observation)

    /* conditionXHR.open('Get', `${CONDITION_BASE_URL}${city}.json `);
    conditionXHR.send();
    conditionXHR.onload = () => {
        if (conditionXHR.status === 200) {
            const dataObj = JSON.parse(conditionXHR.responseText);
            onLoad(dataObj.current_observation)
        } else {
            alert(`Failed to load weather condition: ${conditionXHR.status}`)
        }
    } */
}

export function fetchForecast(city){
    return axios.get(`${FORECAST_BASE_URL}${city}.json `)
        .then(response => response.data.forecast.simpleforecast.forecastday)

    /* forecastXHR.open('Get', `${FORECAST_BASE_URL}${city}.json `);
    forecastXHR.send();
    forecastXHR.onload =() => {
        if (forecastXHR.status === 200) {
            const dataObj = JSON.parse(forecastXHR.responseText);
            console.log(dataObj)
            onLoad(dataObj.forecast.simpleforecast.forecastday);
        } else {
            alert(`Failed to load weather condition: ${forecastXHR.status}`)
        }
    } */

}