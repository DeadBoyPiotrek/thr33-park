const OPENWEATHER_API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
const LATITUDE = process.env.NEXT_PUBLIC_LATITUDE;
const LONGITUDE = process.env.NEXT_PUBLIC_LONGITUDE;
const UNITS = process.env.NEXT_PUBLIC_UNITS;
const LANGUAGE = process.env.NEXT_PUBLIC_LANGUAGE;
import axios from 'axios';

export const getCurrentWeather = async () => {
  const data = await getWeather();
  console.log('data', data);
  const weather = {
    // city: data.current.name,
    temperature: data.current.temp,
    weather: data.current.weather[0],
    weatherDescription: data.current.weather[0].description,
    weatherIcon: data.current.weather[0].icon,
  };

  return weather;
};
export const get5DaysForecast = async () => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${LATITUDE}&lon=${LONGITUDE}&appid=${OPENWEATHER_API_KEY}&units=${UNITS}&lang=${LANGUAGE}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
};

const getWeather = async () => {
  const toExclude = 'minutely,houlry,alerts';
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${LATITUDE}&lon=${LONGITUDE}&exclude=${toExclude}&appid=${OPENWEATHER_API_KEY}&units=${UNITS}&lang=${LANGUAGE}`;
  const { data } = await axios.get(url);
  return data;
};
// first letter of each word in a string to uppercase
export const uppercaseFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
