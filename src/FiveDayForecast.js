import React, { useState, useEffect } from 'react';
import { getFiveDayForecast } from './WeatherService';
import ForecastCard from './ForecastCard';

const FiveDayForecast = ({ city }) => {
    const [forecast, setForecast] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchForecast = async () => {
            try {
                const data = await getFiveDayForecast(city);
                setForecast(data.forecast.forecastday);
                setError('');
            } catch (err) {
                setError(err);
            }
        };
        fetchForecast();
    }, [city]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>5-Day Forecast for {city}</h2>
            <div className="forecast-container">
                {forecast && forecast.map((day, index) => (
                    <ForecastCard key={index} forecast={day} />
                ))}
            </div>
        </div>
    );
};

export default FiveDayForecast;
