// Create Weather instance
const weather = new Weather();

// Get weather button
const getWeatherBtn = document.getElementById('getWeatherBtn');

// Add event listener to the get weather button
getWeatherBtn.addEventListener('click', getWeather);

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
