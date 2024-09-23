import React, { useState } from 'react';
import WeatherDisplay from './WeatherDisplay';
import CitySearch from './CitySearch';
import FiveDayForecast from './FiveDayForecast';
import TemperatureToggle from './TemperatureToggle';

const App = () => {
    const [city, setCity] = useState('London'); // Default city
    const [unit, setUnit] = useState('metric');  // 'metric' for Celsius, 'imperial' for Fahrenheit

    return (
        <div>
            <CitySearch onSearch={setCity} />
            <TemperatureToggle unit={unit} setUnit={setUnit} />
            <WeatherDisplay city={city} unit={unit} />
            <FiveDayForecast city={city} />
        </div>
    );
};

export default App;
