class Weather {
  constructor() {
    this.apiKey = 'fd1973584cc04666b6ce77b7c0c189d1';
  }

  // Fetch weather data from API
  async getWeatherData(location) {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${location}`);
    const data = await response.json();
    return data;
  }
}
