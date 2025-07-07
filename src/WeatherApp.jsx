import { dividerClasses } from "@mui/material";
import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from "react";

export default function WeatherApp(){
    let[weatherInfo,setWeatherInfo]=useState({
        city:"Nellore",
        FeelsLike: 31.89,
        Humidity: 46,
        MaxTemp: 31.01,
        MinTemp: 31.01,
        description: "overcast clouds",
        temp: 31.0
    })
    let updateInfo = (result)=>{
        setWeatherInfo(result);
    }
    return(
        <div>
            <h1>Weather App by Jiggy</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox weather={weatherInfo}/>
        </div>
    )
}