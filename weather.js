class Weather {
    constructor() {
      this.apiKey = '34e1cd8db4fc460094c173346231806';
    }
  
    // Fetch weather data from API
    async getWeatherData(location) {
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${location}`);
      const data = await response.json();
      return data;
    }
  }
  