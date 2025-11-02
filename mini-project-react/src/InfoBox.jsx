import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"

export default function InfoBox() {
    const INTI_URL = "https://media.istockphoto.com/id/1160438555/photo/fog-and-clouds-on-mountain.webp?a=1&b=1&s=612x612&w=0&k=20&c=j3vPHRFBrJGtKr0TKh2or0YNrj2Uuv6oN_ZIhCqzThY="
    let info = {
        city: "Delhi",
        feelsLike: 22.09,
        humidity: 68,
        temp: 22.05,
        tempMax: 22.05,
        tempMin: 22.05,
        weather: "mist"
    };
    return(
        <div className="InfoBox "> 
            <h1>WeatherInfo - {info.weather}</h1>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={INTI_URL}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {info.city}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                    <p>Tempertature = {info.temp}&deg;C</p>
                    <p>Humidity = {info.humidity}</p>
                    <p>Min Temp = {info.tempMin}&deg;C</p>
                    <p>Max Temp = {info.tempMax}&deg;C</p>
                    <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>

                </Typography>
            </CardContent>
            </Card>
        </div>
    )
}