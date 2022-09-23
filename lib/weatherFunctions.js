import { DateTime } from 'luxon';
const OPENWEATHER_API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
const units = 'metric';
const lang = 'pl';
const city = 'Krynica';
const baseUrl = 'https://api.openweathermap.org/data/2.5';

//! new functions ------------------------------------------------------------ START

export const getWeatherAndForecast = async () => {
  const weatherData = await getWeather('weather', {
    appid: OPENWEATHER_API_KEY,
    q: city,
    units,
    lang,
  });
  // console.log('weatherData:', weatherData);
  const formattedWeather = formatWeather(weatherData);
  const { lat, lon } = weatherData.coord;

  const forecastData = await getWeather('onecall', {
    appid: OPENWEATHER_API_KEY,
    units,
    lang,
    lat,
    lon,
    exclude: 'minutely,hourly,alerts',
  });
  const formattedForecast = formatForecast(forecastData);

  return {
    ...formattedWeather,
    ...formattedForecast,
  };
};

const getWeather = async (infoType, searchParams) => {
  const url = new URL(baseUrl + '/' + infoType);
  url.search = new URLSearchParams({ ...searchParams });

  const response = await fetch(url.href).catch(e => console.log('error:', e));
  const data = await response.json();
  console.log('data------------------------', data);
  return data;
};

const formatWeather = data => {
  // console.log(data);
  const { lat, lon } = data.coord;
  const { description, icon } = data.weather[0];
  const { temp } = data.main;
  const { name } = data;

  return {
    lat,
    lon,
    description: uppercaseFirstLetter(description),
    iconUrl: iconUrlFromCode(icon),
    temp: Math.round(temp),
    name,
  };
};

const formatForecast = data => {
  const { timezone } = data;
  const { dt } = data.current;
  const daily = data.daily;
  const forecast = daily.slice(1, 6).map(day => {
    return {
      name: formatToLocalTime(day.dt, timezone, 'cccc'),
      temp: Math.round(day.temp.day),
      iconUrl: iconUrlFromCode(day.weather[0].icon),
      bg: createBackground(Math.round(day.temp.day)),
      bgImg: createBackground(Math.round(day.temp.day)).bgImg,
    };
  });
  return {
    timezone,
    dt: formatToLocalTime2(dt, timezone),
    forecast,
  };
};

//! new functions ------------------------------------------------------------ END

const createBackground = temp => {
  if (temp > 30) {
    return {
      bg: '#FFE53B',
      bgImg: 'linear-gradient(147deg, #FFE53B 0%, #FF2525 74%)',
    };
  } else if (temp > 25) {
    return {
      bg: '#FBAB7E',
      bgImg: 'linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)',
    };
  } else if (temp > 20) {
    return {
      bg: '#85FFF0',
      bgImg: 'linear-gradient(45deg, #85FFF0 0%, #FFFB7D 100%)',
    };
  } else if (temp > 15) {
    return {
      bg: '#F4D03F',
      bgImg: 'linear-gradient(132deg, #F4D03F 0%, #169ba0 100%)',
    };
  } else if (temp > 10) {
    return {
      bg: '#D9AFD9',
      bgImg: 'linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)',
    };
  } else if (temp > 5) {
    return {
      bg: '#0093E9',
      bgImg: 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)',
    };
  }
  return {
    bg: '#8BC6EC',
    bgImg: 'linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)',
  };
};

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

const formatToLocalTime2 = (secs, timezone) => {
  const date = DateTime.fromSeconds(secs).setZone(timezone);
  const dateIn24 = date.toLocaleString(DateTime.TIME_24_SIMPLE);
  return dateIn24;
};
