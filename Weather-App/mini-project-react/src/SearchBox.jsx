import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {

    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";  
    const API_KEY = "b2ffb0a56996b92567a41d16deada4a2";

    let getWeatherInfo = async () => {
    try {
        let response = await fetch (`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);  //Everything here is used from the API URL  and we have converted the units to degree celcius.
    let jsonResponse = await response.json();
    let result = {
        city: city,
        temp: jsonResponse.main.temp,         //This all we have written by checking the console window and printed the same which displayed another object
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feels_like: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
     };
     console.log(result);
     return result;
    } catch(err) {
        throw err;
    }
    
    };

    let handleChange = (event) => {
        setCity(event.target.value);
    };
    let handleSubmit = async (event) => {
        try{
            event.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
        } catch (err){
            setError(true);
        }

    };

    return (
        <div className="search">
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
                <br></br><br></br>
                <Button variant="contained" type='submit'>Search</Button>
                {error && <p style={{color: "red"}}>No such place exists in our API!</p>}
                <br></br><br></br>
            </form>
        </div>
    )
}