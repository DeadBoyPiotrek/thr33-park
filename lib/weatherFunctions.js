import { DateTime } from 'luxon';
const OPENWEATHER_API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
const units = 'metric';
const lang = 'pl';
const city = 'Krynica';
const baseUrl = 'https://api.openweathermap.org/data/2.5';

//! new functions ------------------------------------------------------------ START

export const getWeatherAndForecast = async () => {
  //TODO call getWeather with the right parameters so that it creates valid url ✅
  //TODO format Weather data in getWeather ✅
  //TODO get lat and lon for getForecast() ✅
  const formattedWeather = await getWeather('weather', {
    appid: OPENWEATHER_API_KEY,
    q: city,
    units,
    lang,
  });

  return formattedWeather;

  //TODO call getForecast with the right parameters so that it creates valid url
  //TODO format Forecast data in getForecast
  // return {
  //   ...formattedWeather,
  //   formattedForecast,
  // };
};

const getWeather = async (infoType, searchParams) => {
  const url = new URL(baseUrl + '/' + infoType);
  url.search = new URLSearchParams({ ...searchParams });
  console.log(url.href);
  // let data;
  // try {
  //   const response = await fetch(url.href);
  //   data = await response.json();
  // } catch (e) {
  //   console.log('error:', e);
  // }
  // return data;
  //* or just

  const response = await fetch(url.href).catch(e => console.log('error:', e));
  const data = await response.json();
  console.log('data:', data);
  const { lat, lon } = data.coord;
  const { description, icon } = data.weather[0];
  const { temp } = data.main;
  const { name, dt } = data;

  return {
    lat,
    lon,
    description: uppercaseFirstLetter(description),
    iconUrl: iconUrlFromCode(icon),
    temp: Math.round(temp),
    name,
    dt: formatToLocalTime(dt, 'Europe/Warsaw'),
  };
};

//! new functions ------------------------------------------------------------ END

const iconUrlFromCode = code =>
  `http://openweathermap.org/img/wn/${code}@4x.png`;

// first letter of each word in a string to uppercase
export const uppercaseFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const formatToLocalTime = (
  secs,
  zone,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);
