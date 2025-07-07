
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({weather}) {
    let IMG_URL = "https://media.istockphoto.com/id/668658580/photo/blue-sky.jpg?s=2048x2048&w=is&k=20&c=YKnxZp6wFI6waypN6aPhlnBfjFhaeUgCuZRRUWVJqTk=";
    let HOT_URL="https://media.istockphoto.com/id/824845572/photo/thermometer-sun-high-degres-hot-summer-day-high-summer-temperatures.jpg?s=2048x2048&w=is&k=20&c=MEinOvXAEFy9XXcclTgQV64m_FaoT_NRz8YyWItS9zM=";
    let COLD_URL="https://plus.unsplash.com/premium_photo-1673798031284-1d3c12691062?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let RAINY_URL="https://images.unsplash.com/photo-1566007888128-5447d9b3caf9?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return (
        <div style={{display:"flex",justifyContent:"center"}}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={weather.Humidity > 80 ? RAINY_URL :weather.temp > 25?HOT_URL:COLD_URL }
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {weather.city }{weather.Humidity > 80 ? <ThunderstormIcon/> :weather.temp > 25?<SunnyIcon/>:<AcUnitIcon/>}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        <div><b>Humidity:</b> {weather.Humidity}</div>
                        <div style={{fontWeight:700,color:"black"}}><b>Temperature:</b>{weather.temp}&deg;C</div>
                        <div><b>Max Temperature:</b>{weather.MaxTemp}&deg;C</div>
                        <div><b>Min Temperature:</b>{weather.MinTemp}&deg;C</div>
                        <div>Weather can be <i>{weather.description}</i> Today and Feels Like {weather.FeelsLike}&deg;C</div>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}