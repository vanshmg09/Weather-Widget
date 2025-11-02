import { useState } from "react"
import InfoBox from "./InfoBox"
import SearchBox from "./SearchBox"

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 22.09,
        humidity: 68,
        temp: 22.05,
        tempMax: 22.05,
        tempMin: 22.05,
        weather: "mist"
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
    return(
        <div style={{textAlign : "center"}}>
            <h2>Weather App by Delta</h2>
            <SearchBox updateInfo = {updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}