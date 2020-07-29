const API_KEY = "3515eb54a10f2ef0d46d3777bab42cae";

// Obeject that holds function that will call OpenWeatherMap API
const OpenWeatherMap = {
  // Async function that accepts the name of the city as a parameter
  async weatherSearch(cityName) {
    // Call (fetch) API using the URL will return promise and stores it the variable
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
    );
    // Extract the JSON content from the promise and saves it to the variable
    const data = await response.json();
    // Conditional that checks to if no error codes were returned
    if (data.cod === 200) {
      // Returns an object with data from API if no errors are present
      return {
        code: data.cod,
        location: data.name,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        icon: data.weather[0].icon,
        description: data.weather[0].description,
      };
    } else {
      // Returns an object with error code if error is present
      return {
        code: data.cod,
      };
    }
  },
};

export default OpenWeatherMap;
