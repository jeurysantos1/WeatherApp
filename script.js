const apiKey = "52f3038259d40dc55390bfbc0e2f9799";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";
const searchBox = document.querySelector(".search_input");
const searchBtn = document.querySelector(".search_button");
const weathericon= document.querySelector(".weather_icon");
const weathericon2 = document.querySelector(".weather_icon-2");
var background_main = document.querySelector(".main_background");
var background_small = document.querySelector(".card_content-1");
var temperature1 = document.querySelector(".temperature_1");
var temperature2 = document.querySelector(".temperature_2");



async function checkWeather(city){

    const response = await fetch(apiURL + city + '&appid=52f3038259d40dc55390bfbc0e2f9799');
    var data = await response.json();


    console.log(data);
    document.querySelector(".city_title").innerHTML = data.name;
    document.querySelector(".temperature_1").innerHTML = Math.round(data.main.temp);


    document.querySelector(".temperature_2").innerHTML =Math.round(data.main.feels_like);
    document.querySelector(".max_degree_data").innerHTML =  Math.round(data.main.temp_max) + "°c" ;
    document.querySelector(".min_degree_data").innerHTML =  Math.round(data.main.temp_min) + "°c";
    document.querySelector(".humidity_degree_data").innerHTML =  data.main.humidity + "%";

///checking for city name and upadte background////
    if(data.name =="Paris"){
        background_main.style.backgroundImage ="url('/Assests/paris.png')";
        background_small.style.backgroundImage ="url('/Assests/paris.png')";
    }
    if (data.name =="London"){
        background_main.style.backgroundImage ="url('/Assests/london.png')";
        background_small.style.backgroundImage ="url('/Assests/london.png')";
    }

    if (data.name =="Santo Domingo"){
        background_main.style.backgroundImage ="url('/Assests/Santo_Domingo.png')";
        background_small.style.backgroundImage ="url('/Assests/Santo_Domingo.png')";
    }
    if (data.name =="New York"){
        background_main.style.backgroundImage ="url('/Assests/nyc.png')";
        background_small.style.backgroundImage ="url('/Assests/nyc.png')";
    }
    if (data.name == "Medellín"){
        background_main.style.backgroundImage ="url('/Assests/Medellin.png)";
        background_small.style.backgroundImage ="url('/Assests/Medellin.png')";
    }

///checking for the type of weatehr condition////
    if(data.weather[0].main == "Clouds"){
        weathericon.src = "/Assests/cloudy.png";
        weathericon2.src = "/Assests/cloudy.png";

        temperature1.style.color = "";
        temperature2.style.color = "";

        temperature1.style.top = "50px";
        temperature2.style.top = "53px";
     } 

     else if (data.weather[0].main == "Clear"){
        weathericon.src="/Assests/Clear.png";
        weathericon2.src = "/Assests/Clear.png";
        temperature1.style.color = "white";
        temperature2.style.color = "white";
        
        temperature1.style.top = "4px";
        temperature2.style.top = "2px";
        
     }
     else if (data.weather[0].main == "Rain"){
        weathericon.src="/Assests/Rain.png";
        weathericon2.src = "/Assests/Rain.png";
     } 
     else if (data.weather[0].main == "Drizzle"){
        weathericon.src="/Assests/drizzle.png";
        weathericon2.src = "/Assests/drizzle.png";
     }
     else if(data.weather[0].main == "Mist"){
        weathericon.src ="/Assests/mist.png";
        weathericon2.src = "/Assests/mist.png";
     }
     else if (data.weather[0].main == "Snow"){
        weathericon. src="/Assests/snow.png";
        weathericon2.src = "/Assests/snow.png";
     }


}


searchBtn.addEventListener ("click", ()=>{
    checkWeather(searchBox.value);

    

}); 

