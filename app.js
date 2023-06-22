// William Bukowski was here

// Event listener for the Get Weather button
document.getElementById('getWeatherButton').addEventListener('click', getWeather);

// Function to get weather data
function getWeather() {
  const locationInput = document.getElementById('locationInput');
  const location = locationInput.value.trim();

  if (location !== '') {
    // Clear input field
    locationInput.value = '';

    // Call the weather API
    fetch(`https://api.weatherapi.com/v1/current.json?key=34e1cd8db4fc460094c173346231806&q=${location}`)
      .then(response => response.json())
      .then(data => {
        // Pass weather data to UI update function
        UI.updateUI(data);

        // Update thermometer graph
        const temperatureF = data.current.temp_f;
        Thermometer.updateTemperature(temperatureF);
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }
}
