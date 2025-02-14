import React from 'react'

import './Weather.css'

const Weather = ({ weatherData }) => {
    return (
        <div className='weather'>
            <div className="weatherIcon">
                <div >
                    <img src={weatherData.icon} alt="Clouds" />
                    <p>{weatherData.weatherCondition}</p>
                </div>
                <h2>{weatherData.temperature}°C</h2>
                <h4>{weatherData.location}</h4>
            </div>
            <div className="windDetails">
                <div className="humidityBox">
                    <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhgr7XehXJkOPXbZr8xL42sZEFYlS-1fQcvUMsS2HrrV8pcj3GDFaYmYmeb3vXfMrjGXpViEDVfvLcqI7pJ03pKb_9ldQm-Cj9SlGW2Op8rxArgIhlD6oSLGQQKH9IqH1urPpQ4EAMCs3KOwbzLu57FDKv01PioBJBdR6pqlaxZTJr3HwxOUlFhC9EFyw/s320/thermometer.png" alt="Humidity" />
                    <div className="humidity">
                        <span>Humidity </span>
                        <h2>{weatherData.humidity}% </h2>
                    </div>
                </div>

                <div className="windSpeed">
                    <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiyaIguDPkbBMnUDQkGp3wLRj_kvd_GIQ4RHQar7a32mUGtwg3wHLIe0ejKqryX8dnJu-gqU6CBnDo47O7BlzCMCwRbB7u0Pj0CbtGwtyhd8Y8cgEMaSuZKrw5-62etXwo7UoY509umLmndsRmEqqO0FKocqTqjzHvJFC2AEEYjUax9tc1JMWxIWAQR4g/s320/wind.png" alt='Wind speed' />
                    <div className="wind">
                        <span>Wind Speed</span>
                        <h2> {weatherData.windSpeed} km/h</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather