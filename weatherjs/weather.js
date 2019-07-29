class Weather {
    constructor(city, state) {
        this.apiKey = 'a4f9bdb451d04c40953a60ac7684a8a5';
        this.city = city;
        this.state = state;
    }

    // Fetch weather from API
    async getWeather() {
        const response = await fetch(`https://api.weatherbit.io/v2.0/current?city=${this.city},${this.state}&units=I&key=${this.apiKey}`);
        const responseData = await response.json();

        return responseData.data[0];
    }

    // Change weather location
    changeLocation(city, state) {
        this.city = city;
        this.state = state;
    }
}
