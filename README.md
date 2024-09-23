# React Weather Forecast Application

This is a weather forecast application built using React.js that allows users to search for the current weather and a 5-day forecast for any city. The application also supports toggling between Celsius and Fahrenheit units.

## Features
- **City Search**: Users can search for weather data by entering a city name.
- **Current Weather**: Displays current temperature, weather condition, and an icon representing the weather.
- **5-Day Forecast**: Shows a 5-day forecast with high and low temperatures, and weather icons for each day.(It is only showing three days weather, for display 5 days weather i need paid version for it)
- **Temperature Unit Conversion**: Users can toggle between Celsius and Fahrenheit.
- **Responsive UI**: The interface is responsive and adjusts to various screen sizes.

## Prerequisites

Before running this project, ensure you have the following installed:
- **Node.js** (v10 or higher)
- **npm** (comes with Node.js)

## Setup Instructions

### 1. Clone the Repository
To start, clone the repository to your local machine:
```bash
git clone <your-repository-url>
2. Install Dependencies
Navigate to the project folder and install the required dependencies:

bash
Copy code
cd weather-app
npm install
3. Set Up the Weather API Key
This application uses the OpenWeatherMap API to fetch weather data. To run the application, you need to obtain an API key by registering on OpenWeatherMap.

Once you have your API key:

Open the WeatherService.js file.
Replace the placeholder YOUR_API_KEY_HERE with your actual API key:
javascript
Copy code
const API_KEY = 'YOUR_API_KEY_HERE';
4. Running the Application
After setting up the API key, start the application locally by running the following command:

bash
Copy code
npm start
This will start the development server. You can view the application in your browser at:

arduino
Copy code
http://localhost:3000
Building for Production
To create a production-ready build of the application, run:

bash
Copy code
npm run build
This will generate static files that can be deployed to any web server or hosting service.

Assumptions Made During Development
Weather API: The application uses the OpenWeatherMap API to fetch current weather and forecast data.
Temperature Units: The application supports toggling between metric (Celsius) and imperial (Fahrenheit) units.
Default City: The application uses "London" as the default city if no search query is provided.
How to Use the Application
Search for a City:
Enter the name of a city in the search box and click the "Search" button.
The application will display the current weather for the city along with the 5-day forecast.
Toggle Temperature Units:
Use the "Celsius" and "Fahrenheit" buttons to switch between temperature units.
View the 5-Day Forecast:
The 5-day forecast is displayed below the current weather and shows high and low temperatures for each day along with a weather icon.
Project Structure
src/: Contains the main source code for the application.
WeatherDisplay.js: Responsible for displaying the current weather conditions.
FiveDayForecast.js: Displays the 5-day weather forecast.
TemperatureToggle.js: Provides buttons to toggle between Celsius and Fahrenheit.
WeatherService.js: Handles API requests to the weather service.
CitySearch.js: Handles the search functionality for users to input city names.