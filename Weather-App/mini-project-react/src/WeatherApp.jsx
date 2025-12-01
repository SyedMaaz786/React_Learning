import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Bangalore",
        feels_like: 23.01,
        humidity: 83,
        temp: 22.53,
        tempMax: 23.9,
        tempMin: 20.9,
        weather: "broken clouds",
    });

    let updateInfo = (newInfo) => {   //Re-rendering 
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{textAlign: "center"}}>
            <h2>WeatherApp By Maaz</h2>
            <SearchBox updateInfo ={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}