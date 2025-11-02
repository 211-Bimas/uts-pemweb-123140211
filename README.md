# Weather Dashboard - UTS Pengembangan Aplikasi Web

## Informasi 
- **Nama**: Muhammad Bimastiar
- **NIM**: 123140211
- **Kelas**: RA
- **Mata Kuliah**: Pengembangan Aplikasi Web

## Deskripsi Project
Weather Dashboard adalah aplikasi web berbasis ReactJS yang menampilkan informasi cuaca real-time untuk berbagai kota di seluruh dunia. Aplikasi ini menggunakan OpenWeatherMap API untuk mengambil data cuaca terkini dan prakiraan 5 hari ke depan

## Link Deployment
🌐 **Live Demo**: https://uts-pemweb-123140211.vercel.app/

## Cara Instalasi dan Menjalankan Project

1. **Clone Repository**
```bash
git clone https://github.com/[username]/uts-pemweb-[nim].git
cd uts-pemweb-[nim]
```

2. **Install Dependencies**
```bash
npm install
```

3. **Konfigurasi API Key**
- Daftar di [OpenWeatherMap](https://openweathermap.org/api) untuk mendapatkan API key gratis
- Buka file `src/App.jsx`
- Ganti value `API_KEY` 

4. **Jalankan Development Server**
```bash
npm start
```

## Screenshot Aplikasi

### 1. Halaman Utama (Desktop View)
<img width="1910" height="913" alt="image" src="https://github.com/user-attachments/assets/5550b8fc-2994-4b0a-90e9-0fc584bca68b" />
<img width="1919" height="457" alt="image" src="https://github.com/user-attachments/assets/b983d5cd-d6d1-4307-ac49-b0f146b3cbd8" />

### 2. Autocomplete Feature - Kota di Indonesia
<img width="1909" height="910" alt="image" src="https://github.com/user-attachments/assets/0d06eca3-f553-4ba5-8bbc-a503dde42db4" />

### 3. Detail Cuaca Kota yang Dicari
<img width="955" height="312" alt="image" src="https://github.com/user-attachments/assets/79457f22-b3a0-4a0d-8deb-93489f05c451" />

### 4. Tabel Forecast 5 Hari
<img width="1415" height="628" alt="image" src="https://github.com/user-attachments/assets/4e157fa6-0fc4-443c-8aff-bb0dc9d8173f" />

### 5. History Pencarian dengan Clear All
<img width="469" height="197" alt="image" src="https://github.com/user-attachments/assets/15ec3c8f-4e98-4b62-a95c-fcf56f148e24" />

### 6. Error Handling
<img width="1494" height="293" alt="image" src="https://github.com/user-attachments/assets/f328723c-2bb7-45c8-abf5-89dc523ef741" />

### 7. Tema Warna Sesuai Cuaca
<img width="1558" height="535" alt="image" src="https://github.com/user-attachments/assets/3316551a-fb23-45a0-aaa4-5240b1d3d7d4" />
<img width="1476" height="524" alt="image" src="https://github.com/user-attachments/assets/c340ce07-5226-4af3-9635-fd262f9433f6" />

## Struktur Project
```
public/
└── index.html
src/
├── components/
│ ├── CurrentWeather.jsx
│ ├── ForecastTable.jsx
│ ├── SearchForm.jsx
│ ├── SearchHistory.jsx
│ └── WeatherIcon.jsx
├── contexts/
│ └── ThemeContext.jsx
├── utils/
│ └── api.js
├── app.css
├── app.jsx
└── index.js
.gitignore
package.json
postcss.config.js
tailwind.config.js
vercel.json
```


