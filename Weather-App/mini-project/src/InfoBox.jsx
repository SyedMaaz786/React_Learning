import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './App.css';


export default function InfoBox({ info }) {
    const image_url = 
    "https://media.istockphoto.com/id/507476772/photo/hand-touching-weather-app-on-screen.webp?a=1&b=1&s=612x612&w=0&k=20&c=EebJEPqazc_0YSj2ZVimzE8jTuf0xYv3DhLht5cgM_I=";
   
    return (
        <div className="InfoBox">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} image={image_url} title="weather image" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>

          <Typography variant="body2" color="text.secondary" component={"span"}>
            <p>Temperature = <b>{info.temp}&deg;C</b></p>
            <p>Humidity = <b>{info.humidity}</b></p>
            <p>Min Temp = <b>{info.tempMin}&deg;C</b></p>
            <p>Max Temp = <b>{info.tempMax}&deg;C</b></p>
            <p>The weather can be described as <b>{info.weather}</b> and feels like <b>{info.feels_like}&deg;C</b></p>
          </Typography>
        </CardContent>
      </Card>
    </div>
    );
}