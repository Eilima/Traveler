const API_KEY = "3515eb54a10f2ef0d46d3777bab42cae";

const OpenWeatherMap = {
  async weatherSearch(cityName) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.state.cityName}&units=${this.state.unitValue}&appid=${API_KEY}`
    );
    const data = await response.json();
    console.log(data);
    if (!(data.cod === "404") || !(data.cod == "400")) {
      return {
        location: data.name,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        icon: data.weather[0].icon,
        description: data.weather[0].description,
      };
    }
  },
};
