/*
  Weather App

  Topic: API Integration, State Management, and Conditional Rendering

  Requirements:
    Create a Weather App that fetches data from OpenWeatherMap API.
    Display current weather conditions, temperature, and humidity.
    Implement search functionality to fetch weather data for different cities.
*/
import { useState } from 'react';

import './App.css';
import Weather from './components/Weather'

function App() {
  const [city, setCity] = useState("Jaipur");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)

  const allIcons = {
    'Clouds': "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiwFTkt5z_dxU6w1UnS1PxiZV3HDiPGsAW5Lrsp09MnlCmkQre9GzO8MnGytaaY1eZoqBN6SMJ4U578_uDtiuXswovr1T3o-Kt5KK0mlN_zC0RDodJFaKHQ3Uk-HIZ3vuMvAKNJi8DDFwWA7F6BOxz78Oh-UePwJTuc3PG0ZIZypPE1xlMPl5z46joaEw/s320/Clouds.png",
    'Clear': "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj7pmzNCftryAfpa1YBSzVeYtjgxDQnw09Ug0HVV47J8GEtHPYTH9hJgZ2M1k0YgE0pcZ1qekr4C14zyPCiVuQAfXLClK8Ww3hYB6v77yElP7Lo5BnUKo4n-w6yB17FAbw51WST6YKS0GMwyA4fYNxOZxEyNL6HhUfFRgVhOW0GyRdBRriMHFQ-qfh4cA/s320/sun.png",
    'Rain': "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgDW_NdwvxV796rkFf43qmUDiTQePn5dg7PDfn1SijfpjtB0AWJMBcifU6LWyW7iOtjZhfqIJnKEGQ1PwbbXS7NoKMSAmvy7i2ljWXMYLue3EBIBBR2qTFbs6QCe5eoFr2CU9WzCVJ8u0J3z3eAo3Ajv1LXamZASFtbj9sA_gD-Kp3hfgAk17Xh17RoLQ/s320/rainy.png",
    'Mist': "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgVpL23l0t1U_ibWi01TFcHMF6J_t-9Ada5PavGlwG4M_mKIcx0pV1md9SN9ip1d84NaVowml5Do16XO3nsuttnM2-Ov05d-wCjEYjdzaOYfKvijw8k6Hfj9pOiPyEZTp2W20EPbTeONTgJE2Rdxs4KZUfg6f2PmbMF1094NcqJ7DwSFUQwYiRmVCNvuA/s320/mist.png",
    'Snow': "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-P3iT_uQK95qFY4h7QGdEtbRc1aVQo9BZy0ZWyPBvCNrP-4wnRStw0xYj9e4xa4ZlYISeNZqVJ33UP4YukR4jBennDD_obIN4QxYNZHdzG_z6_MNL2U08wMXwdFhtfvitW5LGiHgrwMJFC8QJFqbSO3woGSBqOdagGxaEQ20_S31Gc-GYL4vYzPzaPw/s320/snow.png",
    'Haze': "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjld66Ia5g_hpBn3Impi3zzOBHqWkjQInGLxTb2uXksuCsrkQU8HjlVyLobEJEGg8fRSIxeFzldGEHUmWcaiZBwAcRy4dGDpFX1BjTSB56qmBjW5tEW3RSC9_mCuLU_a8RuXchxGY7Oc8HLLl-IfaDW19Z0ZJJfNae9tECXRIyEu7rmJ3da08z8cI-phw/s320/haze.png",
    'Smoke': "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjld66Ia5g_hpBn3Impi3zzOBHqWkjQInGLxTb2uXksuCsrkQU8HjlVyLobEJEGg8fRSIxeFzldGEHUmWcaiZBwAcRy4dGDpFX1BjTSB56qmBjW5tEW3RSC9_mCuLU_a8RuXchxGY7Oc8HLLl-IfaDW19Z0ZJJfNae9tECXRIyEu7rmJ3da08z8cI-phw/s320/smoke.png"
  }

  async function getWeatherData(city) {
    try {
      const apiKey = "b61ff5acc807e4d50ea9bc2e1ed1c86c";
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);

      if (!response.ok) {
        throw new Error("Weather data not found")
      }

      return response.json()
    }
    catch (error) {
      throw new Error("Failed to fetch weather data")
    }
  }

  const handleSearch = async (e) => {
    e.preventDefault()
    if (!city.trim()) return

    setLoading(true)
    setError(null)

    try {
      const data = await getWeatherData(city)
      console.log(data);
      setWeatherData({
        temperature: Math.round(data.main.temp),
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        location: data.name,
        weatherCondition: data.weather[0].main,
        icon: allIcons[data.weather[0].main] || allIcons['Clear']
      })
    }
    catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch weather data")
      setWeatherData(null)
    }
    finally {
      setLoading(false)
    }
  }

  return (
    <div className="app">
      <form className="searchInput" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter City Name.."
          value={city}
          onChange={(e) => setCity(e.target.value)} />
        <button
          type="submit"
          disabled={loading}>
          Search
        </button>
      </form>

      {
        error && <div className="error-div">{error}</div>
      }

      {
        weatherData && <Weather weatherData={weatherData} />
      }

    </div>
  );
}

export default App;
