const btn = document.getElementById("btn");
const result = document.getElementById("result");

const apiKey = "ef0a841111fb8c72d4da6577cf244f44";

btn.addEventListener("click", () => {

  const city = document.getElementById("city").value;

  if (city === "") {
    result.innerHTML = "Please enter city name";
    return;
  }

  const url = https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric;

  fetch(url)
    .then(res => res.json())
    .then(data => {

      if (data.cod === "404") {
        result.innerHTML = "City not found ❌";
        return;
      }

      result.innerHTML = 
        <h3>${data.name}</h3>
        <p>🌡 Temp: ${data.main.temp}°C</p>
        <p>☁ Weather: ${data.weather[0].main}</p>
      ;
    })
    .catch(() => {
      result.innerHTML = "Error loading data ❌";
    });
});
