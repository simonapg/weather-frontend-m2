import { OpenMeteoApiClient } from './openmeteo.api.js';
import { WeatherApp } from './weather.app.js';

const apiClient = new OpenMeteoApiClient();

export const weatherApp = new WeatherApp(apiClient);
