import React from 'react';
import './App.css'

const TemperatureToggle = ({ unit, setUnit }) => {
    return (
        <div>
            <button className='btn-temprature' onClick={() => setUnit('metric')} disabled={unit === 'metric'}>
                Celsius
            </button>
            <button className='btn-temprature' onClick={() => setUnit('imperial')} disabled={unit === 'imperial'}>
                Fahrenheit
            </button>
        </div>
    );
};

export default TemperatureToggle;
