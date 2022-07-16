const OPENWEATHER_API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
const LATITUDE = process.env.NEXT_PUBLIC_LATITUDE;
const LONGITUDE = process.env.NEXT_PUBLIC_LONGITUDE;
const UNITS = process.env.NEXT_PUBLIC_UNITS;
const LANGUAGE = process.env.NEXT_PUBLIC_LANGUAGE;

export const getCurrentWeather = async () => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${LATITUDE}&lon=${LONGITUDE}&appid=${OPENWEATHER_API_KEY}&units=${UNITS}&lang=${LANGUAGE}`;

  const response = await fetch(url);
  const data = await response.json();
  return data;
};
export const get5DaysForecast = async () => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${LATITUDE}&lon=${LONGITUDE}&appid=${OPENWEATHER_API_KEY}&units=${UNITS}&lang=${LANGUAGE}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
};

// first letter of each word in a string to uppercase
export const uppercaseFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
