import React, { useState, useEffect } from 'react';
import { getCurrentWeather } from './WeatherService';

const WeatherDisplay = ({ city, unit }) => {
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const data = await getCurrentWeather(city);
                setWeather(data);
                setError('');
            } catch (err) {
                setError(err);
            }
        };
        fetchWeather();
    }, [city]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    const temp = unit === 'metric' ? weather?.current.temp_c : weather?.current.temp_f;

    return (
        <div>
            {weather ? (
                <div>
                    <h2>{weather.location.name}, {weather.location.country}</h2>
                    <p>Temperature: {temp} °{unit === 'metric' ? 'C' : 'F'}</p>
                    <p>Condition: {weather.current.condition.text}</p>
                    <img
                        src={weather.current.condition.icon}
                        alt="Weather icon"
                    />
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default WeatherDisplay;
