export const formatTemp = (temp, unit) => {
  const symbol = unit === 'celsius' ? '°C' : '°F';
  return `${Math.round(temp)}${symbol}`;
};

export const getWeatherBgClasses = (weatherCode) => {
  if (weatherCode === 800) {
    return 'bg-gradient-to-br from-yellow-300 to-yellow-500 text-gray-900 shadow-xl'; 
  }
  if (weatherCode >= 801 && weatherCode <= 804) {
    return 'bg-gradient-to-br from-blue-400 to-blue-600 text-white shadow-xl'; 
  }
  if ((weatherCode >= 300 && weatherCode < 600) || weatherCode === 701) {
    return 'bg-gradient-to-br from-gray-500 to-gray-700 text-white shadow-xl'; 
  }
  if (weatherCode >= 200 && weatherCode < 300) {
    return 'bg-gradient-to-br from-indigo-700 to-gray-900 text-white shadow-xl'; 
  }
  if (weatherCode >= 600 && weatherCode < 700) {
    return 'bg-gradient-to-br from-blue-100 to-blue-300 text-gray-900 shadow-xl'; 
  }
  return 'bg-gradient-to-br from-indigo-200 to-indigo-400 text-gray-900 shadow-xl'; 
};

export const getPageBgClasses = (weatherCode) => {
    if (weatherCode === 800) {
        return 'bg-gradient-to-br from-yellow-50 to-orange-100'; 
    }
    if (weatherCode >= 801 && weatherCode <= 804) {
        return 'bg-gradient-to-br from-blue-50 to-indigo-100'; 
    }
    if ((weatherCode >= 300 && weatherCode < 600) || weatherCode === 701) {
        return 'bg-gradient-to-br from-gray-100 to-gray-200'; 
    }
    if (weatherCode >= 200 && weatherCode < 300) {
        return 'bg-gradient-to-br from-purple-100 to-gray-300'; 
    }
    if (weatherCode >= 600 && weatherCode < 700) {
        return 'bg-gradient-to-br from-white to-blue-50'; 
    }
    return 'bg-gradient-to-br from-blue-50 to-indigo-100'; 
};

export const translateWeatherDescription = (englishText) => {
    if (!englishText) return 'Tidak Tersedia';
    
    const translations = {
        'clear sky': 'Cerah',
        'few clouds': 'Berawan Tipis',
        'scattered clouds': 'Berawan',
        'broken clouds': 'Berawan Tebal',
        'overcast clouds': 'Mendung',
        'light rain': 'Hujan Ringan',
        'moderate rain': 'Hujan Sedang',
        'heavy intensity rain': 'Hujan Lebat',
        'very heavy rain': 'Hujan Sangat Lebat',
        'extreme rain': 'Hujan Ekstrem',
        'shower rain': 'Hujan Gerimis', 
        'rain': 'Hujan',
        'drizzle': 'Gerimis',
        'light intensity drizzle': 'Gerimis Ringan',
        'thunderstorm': 'Badai Petir',
        'light snow': 'Salju Ringan',
        'snow': 'Salju',
        'heavy snow': 'Salju Lebat',
        'sleet': 'Hujan Salju',
        'light shower sleet': 'Hujan Salju Ringan',
        'rain and snow': 'Hujan dan Salju',
        'mist': 'Berkabut',
        'smoke': 'Asap',
        'haze': 'Kabut Asap',
        'fog': 'Kabut',
        'sand/dust': 'Badai Debu',
        'squalls': 'Angin Kencang',
        'tornado': 'Angin Tornado',
    };
    
    const lowerCaseText = englishText.toLowerCase();
    
    return translations[lowerCaseText] || englishText.charAt(0).toUpperCase() + englishText.slice(1);
};