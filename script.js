async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "949e3fdf103227f50a742aeb42c705ba"; // Replace with your OpenWeatherMap API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
      document.getElementById("cityName").innerText = `${data.name}, ${data.sys.country}`;
      document.getElementById("temperature").innerText = `🌡 Temperature: ${data.main.temp} °C`;
      document.getElementById("condition").innerText = `☁ Condition: ${data.weather[0].description}`;
      document.getElementById("wind").innerText = `💨 Wind Speed: ${data.wind.speed} m/s`;

      document.getElementById("weatherCard").classList.remove("hidden");
    } else {
      document.getElementById("weatherCard").classList.add("hidden");
      alert("City not found!");
    }
  } catch (error) {
    alert("Error fetching data!");
  }
}
