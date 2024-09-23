import React from 'react';

const ForecastCard = ({ forecast }) => {
    return (
        <div className="forecast-card">
            <h3>{new Date(forecast.date).toLocaleDateString()}</h3>
            <p>High: {forecast.day.maxtemp_c} °C</p>
            <p>Low: {forecast.day.mintemp_c} °C</p>
            <img src={forecast.day.condition.icon} alt="Weather icon" />
            <p>{forecast.day.condition.text}</p>
        </div>
    );
};

export default ForecastCard;
