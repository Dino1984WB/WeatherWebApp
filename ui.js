/* William Bukowski was here */

class UI {
  static updateUI(weatherData) {
    const weatherContainer = document.getElementById('weatherContainer');
    weatherContainer.innerHTML = `
      <h2>${weatherData.location.name}</h2>
      <p>Temperature: ${weatherData.current.temp_f}°F</p>
      <p>Condition: ${weatherData.current.condition.text}</p>
    `;
  }
}

export default UI;
