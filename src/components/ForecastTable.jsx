import React from 'react';
import { Droplets, Wind } from 'lucide-react';
import WeatherIcon from './WeatherIcon';

const ForecastTable = ({ forecast, unit, formatTemp, translateWeatherDescription }) => {
  if (!forecast || forecast.length === 0) return null;

  const getDailyForecasts = () => {
    const dailyData = {};
    
    forecast.forEach(item => {
      const dateKey = new Date(item.dt * 1000).toISOString().split('T')[0];
      
      if (!dailyData[dateKey]) {
        dailyData[dateKey] = {
          temps: [],
          weather: item.weather[0],
          humidity: [],
          wind: []
        };
      }
      
      dailyData[dateKey].temps.push(item.main.temp);
      dailyData[dateKey].humidity.push(item.main.humidity);
      dailyData[dateKey].wind.push(item.wind.speed);
    });

    return Object.entries(dailyData).slice(0, 5).map(([dateKey, data]) => {
      
      const minTemp = Math.min(...data.temps);
      const maxTemp = Math.max(...data.temps);
      const avgHumidity = data.humidity.reduce((a, b) => a + b, 0) / data.humidity.length;
      const avgWind = data.wind.reduce((a, b) => a + b, 0) / data.wind.length;
      
      const displayDate = new Date(dateKey).toLocaleDateString('id-ID', { 
        weekday: 'short', 
        month: 'short', 
        day: 'numeric' 
      });

      return {
        date: displayDate,
        minTemp,
        maxTemp,
        weather: data.weather,
        humidity: avgHumidity,
        wind: avgWind
      };
    });
  };

  const dailyForecasts = getDailyForecasts();

  return (
    <div className="rounded-xl shadow-lg overflow-hidden transition-colors 'bg-white text-gray-900">
      <h3 className="text-xl font-bold p-4 border-b bg-gray-50 border-gray-200">
        Prakiraan Cuaca 5 Hari Kedepan
      </h3>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left font-semibold">Tanggal</th>
              <th className="px-4 py-3 text-center font-semibold">Cuaca</th>
              <th className="px-4 py-3 text-center font-semibold">Suhu (Min/Max)</th>
              <th className="px-4 py-3 text-center font-semibold">Kelembaban</th>
              <th className="px-4 py-3 text-center font-semibold">Kecepatan Angin</th>
            </tr>
          </thead>
          <tbody className="divide-gray-200">
            {dailyForecasts.map((day, index) => (
              <tr key={index} className="transition-colors hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">{day.date}</td>
                <td className="px-4 py-3">
                  <div className="flex flex-col items-center gap-1">
                    <WeatherIcon weatherMain={day.weather.main} size={32} />
                    <span className="text-xs capitalize">
                      {translateWeatherDescription(day.weather.description)}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-3 text-center">
                  <div className="font-semibold">
                    {formatTemp(day.minTemp, unit)} / {formatTemp(day.maxTemp, unit)}
                  </div>
                </td>
                <td className="px-4 py-3 text-center">
                  <div className="flex items-center justify-center gap-1">
                    <Droplets size={16} className="text-blue-500" />
                    {Math.round(day.humidity)}%
                  </div>
                </td>
                <td className="px-4 py-3 text-center">
                  <div className="flex items-center justify-center gap-1">
                    <Wind size={16} className="text-gray-500" />
                    {day.wind.toFixed(1)} m/s
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ForecastTable;
