// William Bukowski was here
class Weather {
  constructor() {
    this.apiKey = '34e1cd8db4fc460094c173346231806';
  }

  async getWeatherData(location) {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${location}`);
    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }
    const data = await response.json();
    return data;
  }
}

class UI {
  static updateUI(weatherData) {
    const locationName = document.getElementById('locationName');
    const temperature = document.getElementById('temperature');
    const condition = document.getElementById('condition');

    locationName.textContent = weatherData.location.name;
    temperature.textContent = `Temperature: ${weatherData.current.temp_f}°F`;
    condition.textContent = `Condition: ${weatherData.current.condition.text}`;
  }
}

// Create Weather instance
const weather = new Weather();

// Get weather button
const getWeatherButton = document.getElementById('getWeatherButton');

// Add event listener to the get weather button
getWeatherButton.addEventListener('click', getWeather);

// Function to get weather information
function getWeather() {
  // Get location input value
  const locationInput = document.getElementById('locationInput').value;

  // Call the getWeatherData method of the Weather instance
  weather.getWeatherData(locationInput)
    .then(data => {
      // Update UI with weather information
      UI.updateUI(data);
    })
    .catch(error => {
      console.log(error);
    });
}
