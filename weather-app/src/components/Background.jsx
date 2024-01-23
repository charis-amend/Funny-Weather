import sunandshowerBackground from "../assets/sunandshower-background-img.jpg"
import thunderstormBackground from "../assets/thunderstorm-background-img.jpg"
import cloudyBackground from "../assets/cloudy-background-img.jpg"
import snowBackground from "../assets/snow-background-img.jpg"
import sunnyBackground from "../assets/sunny-background-img.jpg"
import rainyBackground from "../assets/rainy-background-img.jpg"

// eslint-disable-next-line react/prop-types
export default function Background({ currentWeatherCondition }) {

    let WeatherComponent;

    switch (currentWeatherCondition) {
        case '🌤️':
            WeatherComponent = SunAndShower;
            break;
        case '⛈️':
            WeatherComponent = Thunderstorm;
            break;
        case '☁️':
            WeatherComponent = Cloudy;
            break;
        case '❄️':
            WeatherComponent = Snow;
            break;
        case "☀️":
            WeatherComponent = Sunny;
            break;
        case '🌧️':
            WeatherComponent = Rainy;
            break;
        default:
            WeatherComponent = null;
    }

    return (
        <>
            {WeatherComponent && <WeatherComponent />}
        </>
    );

}

function SunAndShower() {
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

function Thunderstorm() {
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

function Cloudy() {
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

function Snow() {
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

function Sunny() {
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

function Rainy() {
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