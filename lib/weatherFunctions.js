import 'dotenv/config';

export const getCurrentWeather = async () => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${process.env.LATITUDE}&lon=${process.env.LONGITUDE}&appid=${process.env.OPENWEATHER_API_KEY}&units=${process.env.UNITS}&lang=${process.env.LANGUAGE}`;
  console.log(url);
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
// export const get5DaysForecast = async city => {
//   const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.OPENWEATHER_API_KEY}`;
//   const response = await fetch(url);
//   const data = await response.json();
//   return data;
// };

// first letter of each word in a string to uppercase
export const uppercaseFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
