/* William Bukowski was here */

/* thermometer.js */

class Thermometer {
    constructor() {
      this.mercury = document.querySelector('.mercury');
    }
  
    updateTemperature(tempFahrenheit) {
      const maxHeight = this.mercury.parentNode.clientHeight;
      const fahrenheitHeight = (tempFahrenheit / 100) * (maxHeight * (1 / 3));
      this.mercury.style.height = `${fahrenheitHeight}px`;
    }
  }
  
  // Usage Example
  const thermometer = new Thermometer();
  
  // Update temperature on button click or when fetching weather data
  document.getElementById('getWeatherButton').addEventListener('click', async () => {
    const location = document.getElementById('locationInput').value;
  
    // Fetch weather data from weatherapi.com
    const apiKey = 'YOUR_API_KEY';
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`);
    const data = await response.json();
  
    // Get the temperature in Fahrenheit from the weather data
    const temperatureFahrenheit = data.current.temp_f;
  
    // Update thermometer graph
    thermometer.updateTemperature(temperatureFahrenheit);
  });
  