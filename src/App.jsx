import React, { useState, useEffect, useCallback } from 'react';
import SearchForm from './components/SearchForm';
import CurrentWeather from './components/CurrentWeather';
import ForecastTable from './components/ForecastTable';
import SearchHistory from './components/SearchHistory';
import { fetchCurrentWeather, fetchForecast } from './utils/api';
import './App.css';

const AppContent = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]);
  const [unit, setUnit] = useState('celsius');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


  const popularCities = [
    'Jakarta', 'Surabaya', 'Bandung', 'Medan', 'Bekasi',
    'Depok', 'Tangerang', 'Semarang', 'Palembang', 'Makassar',
    'Bogor', 'Batam', 'Pekanbaru', 'Denpasar', 'Malang',
    'Yogyakarta', 'Padang', 'Banjarmasin', 'Pontianak', 'Manado',
    'Balikpapan', 'Samarinda', 'Mataram', 'Kupang', 'Jayapura',
    'Ambon', 'Palangkaraya', 'Banda Aceh', 'Jambi', 'Cirebon',
    'Solo', 'Tegal', 'Surakarta', 'Palu', 'Kendari',
    'Gorontalo', 'Ternate', 'Sorong', 'Tarakan'
  ];

  const fetchWeatherData = useCallback(async (city) => {
    setIsLoading(true);
    setError(null);

    try {
      const currentData = await fetchCurrentWeather(city);
      setCurrentWeather(currentData);

      const forecastData = await fetchForecast(city);
      setForecast(forecastData);

      addToHistory(city);

    } catch (err) {
      console.error('Failed to fetch weather data:', err);
      setError('Gagal mengambil data cuaca. Silakan coba lagi.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchWeatherData('Bandar Lampung');
  }, [fetchWeatherData]);

  const addToHistory = (city) => {
    setSearchHistory(prev => {
      const filtered = prev.filter(c => c.toLowerCase() !== city.toLowerCase());
      const newHistory = [city, ...filtered].slice(0, 10);
      return newHistory;
    });
  };

  const handleSearch = (city) => {
    fetchWeatherData(city);
  };

  const handleCitySelect = (city) => {
    fetchWeatherData(city);
  };

  const handleUnitToggle = () => {
    setUnit(prev => prev === 'celsius' ? 'fahrenheit' : 'celsius');
  };

  const handleClearHistory = () => {
    setSearchHistory([]);
  };

  const getFilteredSuggestions = (input) => {
    if (input.length < 2) return [];

    const combined = [...new Set([...searchHistory, ...popularCities])];
    return combined.filter(city =>
      city.toLowerCase().includes(input.toLowerCase())
    ).slice(0, 5);
  };

  return (
    <div className="min-h-screen transition-all duration-300 bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-900">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-8 relative">
          <h1 className="text-4xl font-bold mb-2 flex items-center justify-center gap-3 text-gray-800">
            Dasbor Cuaca
          </h1>
            <p className="text-gray-600">
              Informasi cuaca real-time
            </p>
        </header>

        <SearchForm
          onSearch={handleSearch}
          suggestions={getFilteredSuggestions}
          onCitySelect={handleCitySelect}
          isLoading={isLoading}
        />

        {error && (
          <div className="bg-blue-100 border border-blue-400 text-blue-800 px-4 py-3 rounded-lg mb-6">
            ℹ️ {error}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <CurrentWeather 
              data={currentWeather} 
              unit={unit} 
              onUnitToggle={handleUnitToggle}
            />
          </div>

          <div className="lg:col-span-1">
            <SearchHistory
              history={searchHistory}
              onCityClick={handleCitySelect}
              onClearHistory={handleClearHistory}
            />
          </div>

          <div className="lg:col-span-3">
            <ForecastTable forecast={forecast} unit={unit} />
          </div>
        </div>

        <footer className="mt-12 text-center text-sm text-gray-600">
          <p>Data cuaca oleh OpenWeatherMap API</p>
          <p className="mt-1">© 2025 Dasbor Cuaca</p>
          <p className="mt-1">Dibuat oleh Muhammad Bimastiar 123140211</p>
        </footer>
      </div>
    </div>
  );
};

const App = () => {
  return <AppContent />
};

export default App;
