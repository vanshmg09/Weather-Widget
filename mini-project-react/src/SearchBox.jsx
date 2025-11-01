import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox() {
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "e286d9789a983ce53bf0209d45d3845d";

    let [city, setCity] = useState("");

    let getWeatherInfo = async() => {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonRespone = await response.json();
        // console.log(jsonRespone);
        
        let result = {
            temp : jsonRespone.main.temp,
            tempMin : jsonRespone.main.temp_min,
            tempMax : jsonRespone.main.temp_max,
            humidity : jsonRespone.main.humidity,
            feelsLike : jsonRespone.main.feels_like,
            weather : jsonRespone.weather[0].description
        };
        console.log(result);

    }

    let handleChange = (evt) => {
        setCity(evt.target.value);
    }

    let handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(city);
        setCity("");
        getWeatherInfo();
    }

    return(
        <div className='SearchBox'>
            <h3>Search for the Weather</h3>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
                <br /><br />
                <Button variant="contained" type='submit'>Search</Button>
            </form>
        </div>
    )
}