/* William Bukowski was here */
/* William Bukowski was here */
// Rest of your code...

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
const getWeatherBtn = document.getElementById('getWeatherButton');

// Add event listener to the get weather button
getWeatherBtn.addEventListener('click', getWeather);

// Function to get weather information
async function getWeather() {
  // Get location input value
  const locationInput = document.getElementById('locationInput').value;

  try {
    // Call the getWeatherData method of the Weather instance
    const weatherData = await weather.getWeatherData(locationInput);

    // Update UI with weather information
    UI.updateUI(weatherData);
  } catch (error) {
    console.log(error);
  }
}
