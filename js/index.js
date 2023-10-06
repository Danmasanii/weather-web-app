const apiKey="21e80d0d39256eae48499a58489e27ac";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");


async function checkWeather(city){
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "<sup>o</sup>c";
    document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";
    document.querySelector(".lat").innerHTML = data.coord.lat +"<sup>o</sup>N";
    document.querySelector(".lon").innerHTML = data.coord.lon +"<sup>o</sup>E";
    document.querySelector(".country").innerHTML = data.sys.country;
    
}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

