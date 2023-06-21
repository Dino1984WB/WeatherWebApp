class UI {
  static updateUI(weatherData) {
    console.log(weatherData); // Log the weatherData object to inspect its structure
    
    const weatherContainer = document.getElementById('weatherContainer');
    weatherContainer.innerHTML = `
      <h2>${weatherData.location.name}</h2>
      <p>Temperature: ${weatherData.current.temp_f}°F</p>
      <p>Condition: ${weatherData.current.condition.text}</p>
    `;
  }
}
