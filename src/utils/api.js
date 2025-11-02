const API_KEY = '38dd13f9c98577b46e639446fc23f55b';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchCurrentWeather = async (city) => {
  const response = await fetch(
    `${BASE_URL}/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`,
    { mode: 'cors' }
  );
  
  if (!response.ok) {
    throw new Error('Failed to fetch weather data');
  }
  
  return await response.json();
};

export const fetchForecast = async (city) => {
  const response = await fetch(
    `${BASE_URL}/forecast?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`,
    { mode: 'cors' }
  );
  
  if (!response.ok) {
    throw new Error('Failed to fetch forecast data');
  }
  
  const data = await response.json();
  return data.list;
};
