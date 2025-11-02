import React from 'react';
import { History, Trash2 } from 'lucide-react';

const SearchHistory = ({ history, onCityClick, onClearHistory }) => {
  if (history.length === 0) return null;

  return (
    <div className="rounded-xl shadow-lg p-4 transition-colors bg-white text-gray-900">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-bold flex items-center gap-2">
          <History size={20} />
          Riwayat Pencarian
        </h3>
        <button
          onClick={onClearHistory}
          className="flex items-center gap-1 text-sm transition-colors text-red-500 hover:text-red-700"
          aria-label="Hapus riwayat pencarian"
        >
        <Trash2 size={16} />
          Hapus
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {history.map((city, index) => (
          <button
            key={index}
            onClick={() => onCityClick(city)}
            className="px-3 py-1.5 rounded-full transition-colors text-sm 'bg-blue-100 text-blue-700 hover:bg-blue-200"
          >
            {city}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchHistory;
