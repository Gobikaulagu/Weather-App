// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={acda942b0560937bbf2f1e047c200b44}&units=imperial
document.getElementById("searchBtn").addEventListener("click", function () {
  const city = document.getElementById("cityInput").value;
  const apiKey = "acda942b0560937bbf2f1e047c200b44"; // Replace with your OpenWeatherMap API key
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data.cod === 200) {
        document.getElementById("cityName").innerText = data.name;
        document.getElementById(
          "temperature"
        ).innerText = `Temperature: ${data.main.temp} °C`;
        document.getElementById(
          "description"
        ).innerText = `Description: ${data.weather[0].description}`;
      } else {
        alert("City not found");
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      alert("An error occurred while fetching weather data.");
    });
});
