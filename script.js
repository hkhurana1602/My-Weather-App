const options = {
    method: 'GET',
    headers: {
    'X-RapidAPI-Key': 'b45e96323fmshf5e4bc50d3b8a90p1e091djsnfb21cde4eb87',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};


const getWeather = (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then(response => 
        {console.log(response)
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        max_temp.innerHTML = response.max_temp
        min_temp.innerHTML = response.min_temp
        temp.innerHTML = response.temp
        
        const weatherImageFilename = getWeatherImage(response.temp);
        document.getElementById("weatherImage").style.backgroundImage = `url(${weatherImageFilename})`;

        wind_degrees.innerHTML = response.wind_degrees
        wind_speed.innerHTML = response.wind_speed
    })
    .catch(err=> {
        console.error(err)
        document.getElementById("errorMessage").textContent = "An error occurred. Please try again.";
        document.getElementById("errorContainer").style.display = "block";
    });
}

submit.addEventListener("click" , (e)=>{
    e.preventDefault();
    getWeather(city.value)
})


getWeather("Delhi")

function getWeatherImage(temperature) {
    if(temperature <= 5){
      return "snowy.jpeg"
    } else if (temperature > 5 && temperature <= 10) {
      return "winter.jpeg"; 
    } else if (temperature > 10 && temperature <= 20) {
      return "cloudy.jpeg"; 
    } else if (temperature > 20 && temperature <= 30) {
      return "sunny.jpeg"; 
    } else {
      return "hot.jpeg"; 
    }
  }

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
    .then(response => response.json())
    .then(response => 
        {console.log(response)
        feels_like3.innerHTML = response.feels_like
        humidity3.innerHTML = response.humidity
        max_temp3.innerHTML = response.max_temp
        min_temp3.innerHTML = response.min_temp
        temp3.innerHTML = response.temp
        wind_degrees3.innerHTML = response.wind_degrees
        wind_speed3.innerHTML = response.wind_speed
    })
    .catch(err=> console.error(err));

fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=New York", options)
    .then(response => response.json())
    .then(response => 
        {console.log(response)
        feels_like4.innerHTML = response.feels_like
        humidity4.innerHTML = response.humidity
        max_temp4.innerHTML = response.max_temp
        min_temp4.innerHTML = response.min_temp
        temp4.innerHTML = response.temp
        wind_degrees4.innerHTML = response.wind_degrees
        wind_speed4.innerHTML = response.wind_speed
    })
    .catch(err=> console.error(err));

fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata", options)
    .then(response => response.json())
    .then(response => 
        {console.log(response)
        feels_like5.innerHTML = response.feels_like
        humidity5.innerHTML = response.humidity
        max_temp5.innerHTML = response.max_temp
        min_temp5.innerHTML = response.min_temp
        temp5.innerHTML = response.temp
        wind_degrees5.innerHTML = response.wind_degrees
        wind_speed5.innerHTML = response.wind_speed
    })
    .catch(err=> console.error(err));

fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Adelaide", options)
    .then(response => response.json())
    .then(response => 
        {console.log(response)
        feels_like6.innerHTML = response.feels_like
        humidity6.innerHTML = response.humidity
        max_temp6.innerHTML = response.max_temp
        min_temp6.innerHTML = response.min_temp
        temp6.innerHTML = response.temp
        wind_degrees6.innerHTML = response.wind_degrees
        wind_speed6.innerHTML = response.wind_speed
    })
    .catch(err=> console.error(err));

fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=London", options)
    .then(response => response.json())
    .then(response => 
        {console.log(response)
        feels_like7.innerHTML = response.feels_like
        humidity7.innerHTML = response.humidity
        max_temp7.innerHTML = response.max_temp
        min_temp7.innerHTML = response.min_temp
        temp7.innerHTML = response.temp
        wind_degrees7.innerHTML = response.wind_degrees
        wind_speed7.innerHTML = response.wind_speed
    })
    .catch(err=> console.error(err));

fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lahore", options)
    .then(response => response.json())
    .then(response => 
        {console.log(response)
        feels_like8.innerHTML = response.feels_like
        humidity8.innerHTML = response.humidity
        max_temp8.innerHTML = response.max_temp
        min_temp8.innerHTML = response.min_temp
        temp8.innerHTML = response.temp
        wind_degrees8.innerHTML = response.wind_degrees
        wind_speed8.innerHTML = response.wind_speed
    })
    .catch(err=> console.error(err));
