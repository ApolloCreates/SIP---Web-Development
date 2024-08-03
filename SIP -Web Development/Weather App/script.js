const apikey = "4e776281c74b8cc2c8d49a5a76eba441";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&";

const btn = document.querySelector(".search img");

const cityname = document.querySelector(".search input");

const weatherimg = document.querySelector(".condition img");



async function weather(cityname) {
  const response = await fetch(`${apiurl}&appid=${apikey}&q=${cityname}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block"
    document.querySelector(".box").style.display = "none";
  }

  var data = await response.json();

  document.querySelector(".city").innerHTML = data.name;

  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";

  document.querySelector(".feelslike").innerHTML =Math.round(data.main.feels_like) + "°c";

  document.querySelector(".humi").innerHTML = data.main.humidity + "%";

  document.querySelector(".speed").innerHTML = data.wind.speed + "km/h";

  document.querySelector(".sky").innerHTML = data.weather[0].main;

  if ((data.weather[0].main = "Clouds")) {
    weatherimg.src = "images/clouds.png";
  } 
  
  else if ((data.weather[0].main = "Clear")) {
    weatherimg.src = "images/clear.png";
  } 
  
  else if ((data.weather[0].main = "Drizzle")) {
    weatherimg.src = "images/drizzle.png";
  } 
  
  else if ((data.weather[0].main = "Mist")) {
    weatherimg.src = "images/mist.png";
  } 
  
  else if ((data.weather[0].main = "Rain")) {
    weatherimg.src = "images/rain.png";
  } 
  
  else if ((data.weather[0].main = "Snow")) {
    weatherimg.src = "images/snow.png";
  }

  document.querySelector(".box").style.display = "block";
  document.querySelector(".error").style.display = "none"

}

btn.addEventListener("click", () => {
  weather(cityname.value);
});
