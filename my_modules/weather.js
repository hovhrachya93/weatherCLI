module.exports = city => {
    const key = 'e76a1f46bba4d7927af510f5bade8226';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${key}&units=metric`;
    fetch(url).then(res => {
        const weatherData = res.data;
        const tempInfo = `temp: ${weatherData.main.temp}, pressure: ${weatherData.main.pressure}, description: ${weatherData.weather[0].description}, wind:${weatherData.wind.speed}`;
        console.log(tempInfo);
    }).catch((e) => {
        console.log(e.tempInfo);
    });
};

