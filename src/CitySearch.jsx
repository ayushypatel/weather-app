import React, { useState } from 'react';
import './App.css'

const CitySearch = ({ onSearch }) => {
    const [city, setCity] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(city);
        setCity('');
    };

    return (
        <form onSubmit={handleSearch}>
            <input
                type="text"
                placeholder="Enter city"
                className='input-box'
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button type="submit" className='serach-btn'>Search</button>
        </form>
    );
};

export default CitySearch;
