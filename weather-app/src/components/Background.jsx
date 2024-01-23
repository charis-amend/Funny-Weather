import sunandshowerBackground from "../assets/sunandshower-background-img.jpg"
import thunderstormBackground from "../assets/thunderstorm-background-img.jpg"
import cloudyBackground from "../assets/cloudy-background-img.jpg"
import snowBackground from "../assets/snow-background-img.jpg"
import sunnyBackground from "../assets/sunny-background-img.jpg"
import rainyBackground from "../assets/rainy-background-img.jpg"

// eslint-disable-next-line react/prop-types
export default function Background({ currentWeatherCondition }) {

    let WeatherImg;

    switch (currentWeatherCondition) {
        case '🌤️':
            WeatherImg = SunAndShowerImg;
            break;
        case '⛈️':
            WeatherImg = ThunderstormImg;
            break;
        case '☁️':
            WeatherImg = CloudyImg;
            break;
        case '❄️':
            WeatherImg = SnowImg;
            break;
        case "☀️":
            WeatherImg = SunnyImg;
            break;
        case '🌧️':
            WeatherImg = RainyImg;
            break;
        default:
            WeatherImg = null;
    }

    return (
        <>
            {WeatherImg && <WeatherImg />}
        </>
    );

}

function SunAndShowerImg() {
    return (
        <>
            <div className="background-app">
                <img className="sunandshower-background-img"
                    src={sunandshowerBackground}
                    alt="sunandshower-background" />
            </div>
        </>
    )
}

function ThunderstormImg() {
    return (
        <>
            <div className="background-app">
                <img className="thunderstorm-background-img"
                    src={thunderstormBackground}
                    alt="thunderstorm-background" />
            </div>
        </>
    )
}

function CloudyImg() {
    return (
        <>
            <div className="background-app">
                <img className="cloudy-background-img"
                    src={cloudyBackground}
                    alt="cloudy-background" />
            </div>
        </>
    )
}

function SnowImg() {
    return (

        <>
            <div className="background-app">
                <img className="snow-background-img"
                    src={snowBackground}
                    alt="snow-background" />
            </div>
        </>
    )
}

function SunnyImg() {
    return (
        <>
            <div className="background-app">
                <img className="sunny-background-img"
                    src={sunnyBackground}
                    alt="sunny-background" />
            </div>
        </>
    )
}

function RainyImg() {
    return (
        <>
            <div className="background-app">
                <img className="rainy-background-img"
                    src={rainyBackground}
                    alt="rainy-background" />
            </div>
        </>
    )
}