import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("")
    let [error, setError] = useState(false)
    let API_URL = "https://api.openweathermap.org/data/2.5/weather";
    let API_KEY = "f66b76021cdde74dd007af5b16b3cf22"

    let getWeatherInfo = async()=>{
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let Jsonresponse = await response.json();
        console.log(Jsonresponse);

        let result = {
            
            city:city,
            temp:Jsonresponse.main.temp,
            MaxTemp:Jsonresponse.main.temp_max,
            MinTemp:Jsonresponse.main.temp_min,
            Humidity:Jsonresponse.main.humidity,
            FeelsLike:Jsonresponse.main.feels_like,
            description:Jsonresponse.weather[0].description
        }
        console.log(result)
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
        setCity("")
        let newInfo= await getWeatherInfo();
        updateInfo(newInfo);
        }catch(err){
            setError(true);
        }
       

        
    }

    return (
        <div style={{marginBottom:"25px"}}>
            <form onSubmit={handleSubmit}>
                <TextField id="city" value={city} label="City Name" variant="outlined" color="secondary" focused required onChange={handleChange} />
                <br /><br />
                <Button variant="contained" type="submit" >Submit</Button>
                {error && <p style={{color:"yellow"}}>No Such place Exist in out API</p>}
            </form>
        </div>
    )
}