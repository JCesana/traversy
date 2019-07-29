class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelslike = document.getElementById('w-feels-like');
        this.dewpoint = document.getElementById('w-dewpoint');
        this.wind = document.getElementById('w-wind');
    }

    paint(weather) {
        this.location.textContent = `${weather.city_name}, ${weather.state_code}`;
        this.desc.textContent = weather.weather.description;
        this.string.textContent = `${weather.temp} F`;
        this.icon.setAttribute('src', `https://www.weatherbit.io/static/img/icons/${weather.weather.icon}.png`);
        this.humidity.textContent = `Relative Humidity: ${weather.rh}%`;
        this.feelslike.textContent = `Feels Like: ${weather.app_temp} F`;
        this.dewpoint.textContent = `Dewpoint: ${weather.dewpt} F`;
        this.wind.textContent = `Wind: From the ${weather.wind_cdir_full} at ${weather.wind_spd} MPH`;
    }
}
