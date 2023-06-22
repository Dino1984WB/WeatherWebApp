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
    const asciiAnimation = this.getAsciiAnimation(condition);
    weatherAnimation.innerHTML = asciiAnimation;
  }

  static getAsciiAnimation(condition) {
    switch (condition) {
      case 'partly cloudy':
        return `
          .--.
       .'_\/_'.
      '. /--\ .'
       ' |  | '
         '.'
        `;
      case 'sunny':
        return `
         \\   /
          .-.
      --: / | \\ :--
          || ||
        `;
      case 'windy':
        return `
        _  _
        ( '  ' )
       (    )    ')
        (_ (_ .  _) _)
          '~~'\~~'
              '\~~
                \_
        `;
      default:
        return '';
    }
  }
}
