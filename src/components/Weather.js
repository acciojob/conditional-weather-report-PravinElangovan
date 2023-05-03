import { use } from "chai";
import { useState } from "react";

function Weather(){
    const[weather, setWeather] = useState({temperature:25, conditions:"Sunny"});
    const tempColor = weather.temperature>20? "red":"blue";

    return (
        <div>
            <h1>Weather App</h1>
            <p>Temperature: 
                <span style={{color:tempColor}}>
                    {weather.temperature}°C
                </span>
            </p>
            <p>Conditions: {weather.conditions}</p>
        </div>
    );
}

export default Weather;