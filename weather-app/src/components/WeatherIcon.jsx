
// eslint-disable-next-line react/prop-types
export default function WeatherIcon({ currentWeatherCondition }) {

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
        <div className="icon sun-shower">
            <div className="cloud"></div>
            <div className="sun">
                <div className="rays"></div>
            </div>
        </div>
    )
}

function Thunderstorm() {
    return (
        <div className="icon thunder-storm">
            <div className="cloud"></div>
            <div className="lightning">
                <div className="bolt"></div>
                <div className="bolt"></div>
            </div>
        </div>
    )
}

function Cloudy() {
    return (
        <div className="icon cloudy">
            <div className="cloud"></div>
            <div className="cloud"></div>
        </div>
    )
}

function Snow() {
    return (

        <div className="icon flurries">
            <div className="cloud"></div>
            <div className="snow">
                <div className="flake"></div>
                <div className="flake"></div>
            </div>
        </div>
    )
}

function Sunny() {
    return (
        <div className="icon sunny">
            <div className="sun">
                <div className="rays"></div>
            </div>
        </div>
    )
}

function Rainy() {
    return (
        <div className="icon rainy">
            <div className="cloud"></div>
            <div className="rain"></div>
        </div>
    )
}