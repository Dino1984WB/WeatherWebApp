class UI {
  static updateUI(weatherData) {
    const weatherContainer = document.getElementById('weatherContainer');
    weatherContainer.innerHTML = `
      <h2>${weatherData.location.name}</h2>
      <p>Temperature: ${weatherData.current.temp_f}°F</p>
      <p>Condition: ${weatherData.current.condition.text}</p>
    `;

    const weatherAnimation = document.getElementById('weatherAnimation');
    const condition = weatherData.current.condition.text.toLowerCase();
    const imageSrc = this.getImageSrc(condition);
    weatherAnimation.innerHTML = `<img src="${imageSrc}" alt="${condition}">`;
  }

  static getImageSrc(condition) {
    switch (condition) {
      case 'partly cloudy':
        return 'images/cloudy.png';
      case 'sunny':
        return 'images/sunny.png';
      case 'rain':
        return 'images/rain.png';
      default:
        return '';
    }
  }
}
