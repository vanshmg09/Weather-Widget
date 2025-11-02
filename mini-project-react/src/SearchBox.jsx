import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "e286d9789a983ce53bf0209d45d3845d";

    let [city, setCity] = useState("");
    let [error, setError] = useState(false);


    let getWeatherInfo = async() => {
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonRespone = await response.json();
            // console.log(jsonRespone);
            
            let result = {
                city: city,
                temp : jsonRespone.main.temp,
                tempMin : jsonRespone.main.temp_min,
                tempMax : jsonRespone.main.temp_max,
                humidity : jsonRespone.main.humidity,
                feelsLike : jsonRespone.main.feels_like,
                weather : jsonRespone.weather[0].description
            };
            console.log(result);
            return result;
        }catch(err){
            throw err;
        }
        
    }

    let handleChange = (evt) => {
        setCity(evt.target.value);
    }

    let handleSubmit = async(evt) => {
        try{
            evt.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo); 
        }catch(err){
            setError(true)
        }
        
    }

    return(
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
                <br /><br />
                <Button variant="contained" type='submit'>Search</Button>
            </form>
            {error && <p style={{color: "red"}}>No such place exist!</p>}
        </div>
    )
}