function getWeather(cityName) {
    const apiKey = '5ea630fd206323c81ecf829381188bdf'; 
    const weatherInfo = document.getElementById('weather-info');

    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const temperature = data.main.temp - 273.15; 
            const description = data.weather[0].description;
            weatherInfo.innerHTML = `En ${cityName}, la temperatura es de ${temperature.toFixed(2)}°C y el clima es ${description}.`;
        })
        .catch(error => {
            console.error('Hubo un error:', error);
            weatherInfo.innerHTML = 'No se pudo obtener la información meteorológica.';
        });
}