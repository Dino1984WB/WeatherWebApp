/* William Bukowski was here */

/* thermometer.js */

class Thermometer {
    constructor() {
      this.mercury = document.querySelector('.mercury');
    }
  
    updateTemperature(tempFahrenheit) {
        console.log('Temperature (Fahrenheit):', tempFahrenheit);
      
        const maxHeight = this.mercury.parentNode.clientHeight;
        console.log('Max Height:', maxHeight);
      
        const fahrenheitHeight = (tempFahrenheit / 200) * (maxHeight * (2 / 3));
        console.log('Height (Fahrenheit):', fahrenheitHeight);
      
        this.mercury.style.height = `${fahrenheitHeight}px`;
      }
      
  }
  
  // Usage Example
  const thermometer = new Thermometer();
  
  // Update temperature on button click or when fetching weather data
  document.getElementById('getWeatherButton').addEventListener('click', async () => {
    const location = document.getElementById('locationInput').value;
  
    // Fetch weather data from weatherapi.com
    const apiKey = '34e1cd8db4fc460094c173346231806';
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`);
    const data = await response.json();
  
    // Get the temperature in Fahrenheit from the weather data
    const temperatureFahrenheit = data.current.temp_f;
  
    // Update thermometer graph
    thermometer.updateTemperature(temperatureFahrenheit);
  });
  