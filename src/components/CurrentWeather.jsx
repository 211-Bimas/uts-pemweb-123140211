import React from 'react';
import { Droplets, Wind, Cloud } from 'lucide-react';
import WeatherIcon from './WeatherIcon';

const CurrentWeather = ({ 
    data, 
    unit, 
    onUnitToggle, 
    getWeatherBgClasses, 
    formatTemp,
    translateWeatherDescription           
}) => {
    if (!data) return null;

    const { name, main, weather, wind } = data;
    const weatherCode = weather[0]?.id;

    const backgroundClasses = getWeatherBgClasses(weatherCode);

    const rawDescription = weather[0]?.description;
    const translatedDescription = translateWeatherDescription(rawDescription);

    return (
        <div className={`rounded-xl p-6 shadow-lg transition-all duration-300 ${backgroundClasses}`}>
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h2 className="text-3xl font-bold">{name}</h2>
                    <p className="opacity-80 capitalize">{translatedDescription}</p>
                </div>
                <button
                    onClick={onUnitToggle}
                    className="bg-white/20 px-4 py-2 rounded-lg hover:bg-white/30 transition-colors"
                    aria-label="Alihkan satuan suhu"
                >
                    {unit === 'celsius' ? '°C' : '°F'} | {unit === 'celsius' ? '°F' : '°C'}
                </button>
            </div>

            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <WeatherIcon weatherMain={weather[0]?.main} size={64} /> 
                    <div className="text-6xl font-bold">{formatTemp(main.temp, unit)}</div>
                </div>

                <div className="space-y-3">
                    <div className="flex items-center gap-2">
                        <Droplets size={20} />
                        <span>Kelembaban: {main.humidity}%</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Wind size={20} />
                        <span>Angin: {wind.speed} m/s</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Cloud size={20} />
                        <span>Terasa seperti: {formatTemp(main.feels_like, unit)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurrentWeather;
