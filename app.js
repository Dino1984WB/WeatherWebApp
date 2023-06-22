//william bukowksi was here
import thermometer from './thermometer.js';
import UI from './ui.js';

// Update temperature on button click or when fetching weather data
document.getElementById('getWeatherButton').addEventListener('click', async () => {
  const location = document.getElementById('locationInput').value;

  // Disable the button temporarily
  document.getElementById('getWeatherButton').disabled = true;

  // Fetch weather data from weatherapi.com
  const apiKey = '34e1cd8db4fc460094c173346231806';
  const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`);
  const data = await response.json();

  // Get the temperature in Fahrenheit from the weather data
  const temperatureFahrenheit = data.current.temp_f;

  // Update thermometer graph
  thermometer.updateTemperature(temperatureFahrenheit);

  // Update the UI with weather information
  UI.updateUI(data);

  // Enable the button again
  document.getElementById('getWeatherButton').disabled = false;
});
