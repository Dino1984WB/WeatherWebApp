class Weather {
  constructor() {
    this.apiKey = 'YOUR_API_KEY';
  }

  // Fetch weather data from API
  async getWeatherData(location) {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${location}`);
    const data = await response.json();
    return data;
  }
}
