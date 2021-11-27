import React, { useState } from 'react';
import './WeatherAppMain.scss';
import axios from 'axios';

import img_1 from '../../images/autumn-6769712_960_720.jpg'


function WeatherAppMain() {

    const apiKey = 'b21c75da9fa9a98ad1ac5db4a7efc584';

    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState('');
    const [apiError, setApiError] = useState();

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function trackValue(e) {
        document.querySelector('.weather-app_city-input').value = e.target.value
        setCity(document.querySelector('.weather-app_city-input').value)
    }

    function setCityValue() {
        capitalizeFirstLetter(setCity(document.querySelector('.weather-app_city-input').value));
    }

    async function gettingWeather(e) {
        if (document.querySelector('.weather-app_city-input').value) {
            try {
                e.preventDefault();
                setApiError(false);
                const api_url = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ru`);
                setWeatherData(api_url.data);
                document.querySelector('.weather-app_city-input').value = "";
            } catch {
                setWeatherData('')
                setApiError(true)
            }
        }
    }


    return (
        <>
            <section className='weather-app'>
                <div className="weather-app_main" >
                    <div className='weather-app_left-col' style={{ background: `no-repeat center url(${img_1})` }}>

                    </div >
                    <div className='weather-app_right-col'>
                        <form className="weather-app_form" onSubmit={(e) => { e.preventDefault(); gettingWeather(e) }} >
                            <input className="weather-app_city-input" type="text" name="city" placeholder="Введите город" onChange={trackValue}  >
                            </input>
                            <button className="weather-app_form-button">Отобразить погоду</button>
                        </form>
                        {weatherData && <div className="weather-app_data data">
                            <div className="weather-app_data-header">
                                <h3>{weatherData.name}</h3>
                                <span>{weatherData.weather[0].description}</span>
                            </div>
                            <p> Температура: <span className="data-span">{Math.round(weatherData.main.temp)}</span></p>
                            <p> Температура по ощущению: <span className="data-span">{Math.round(weatherData.main.feels_like)}</span></p>
                            <p> Осадки за час: {weatherData.rain ? <span className="data-span">{weatherData.rain["1h"]}мм</span> : <span className="data-span"> 0 мм</span>}</p>
                            <p> Влажность: <span className="data-span">{weatherData.main.humidity}%</span></p>
                            <p> Облачность: <span className="data-span">{weatherData.clouds.all}%</span></p>
                            <p> Скорость ветра: <span className="data-span">{weatherData.wind.speed} м/с</span></p>

                        </div>
                        }
                        {apiError && <div className="weather-app_app-error"> Город не найден, попробуйте ввести другое название</div>}
                    </div>
                </div>
            </section>
        </>
    );
}

export default WeatherAppMain