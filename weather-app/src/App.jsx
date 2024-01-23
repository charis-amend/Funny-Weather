// import { useState } from 'react'
import { useEffect, useState } from 'react'
import './App.css'
import { uid } from 'uid'
import useLocalStorageState from 'use-local-storage-state'
import Form from './components/Form.jsx'
import List from './components/List.jsx'
import WeatherIcon from './components/WeatherIcon.jsx'

import sunnyandshowerBackground from "./assets/sunnyandshower-background-img.jpg";
import thunderstormBackground from "./assets/thunderstorm-background-img.jpg";
import cloudyBackground from "./assets/cloudy-background-img.jpg";
import snowBackground from "./assets/snow-background-img.jpg";
import sunnyBackground from "./assets/sunny-background-img.jpg";
import rainyBackground from "./assets/rainy-background-img.jpg";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", { defaultValue: [] })
  const [weather, setWeather] = useState("");


  useEffect(() => {
    async function startFetching() {
      const response = await fetch("https://example-apis.vercel.app/api/weather")
      const weather = await response.json();
      console.log(weather)
      setWeather(weather);
    }
    // startFetching();

    function intervalWeather() {
      setInterval(() => {
        startFetching();
      }, 5000);
      return () => clearInterval(intervalWeather)
    }
    intervalWeather();
  }, []);

  function AddActivity(newActivity) {
    setActivities([...activities, { ...newActivity, id: uid() }])
  }
  function DeleteActivity(activityToDelete) {
    const remainingActivities = activities.filter((activity) => activity !== activityToDelete);
    setActivities(remainingActivities);
  }

  const isGoodWeather = weather?.isGoodWeather
  // console.log("the condition whether isGoodWeather from the api", isGoodWeather)
  // console.log("activities:", activities)
  const goodWeatherActivities = activities.filter(activity =>
    activity.isForGoodWeather === true
  )
  const badWeatherActivities = activities.filter(activity =>
    activity.isForGoodWeather === false
  )

  const createDateTime = new Date();
  const options = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  };
  let currentDateAndTime = createDateTime.toLocaleString('en-US', options);
  // Removing all commas
  currentDateAndTime = currentDateAndTime.replace(/,/g, '');
  // Converting AM/PM to lowercase
  currentDateAndTime = currentDateAndTime.replace('AM', 'am').replace('PM', 'pm');
  console.log(currentDateAndTime)

  function SwitchBackground(weatherCondition) {
    weatherCondition = weather.condition
    switch (weatherCondition) {
      case '🌤️':
        return sunnyandshowerBackground;
      case '⛈️':
        return thunderstormBackground;
      case '☁️':
        return cloudyBackground;
      case '❄️':
        return snowBackground;
      case "☀️":
        return sunnyBackground;
      case '🌧️':
        return rainyBackground;
      default:
        return sunnyBackground;
    }
  }
  const backgroundUrlImg = SwitchBackground(weather?.condition)

  return (
    <div className="background-app" style={{ backgroundImage: `url(${backgroundUrlImg})` }}>
      {/* <div className='title'>
        <h1 className='app-title'>Weather App</h1>
      </div> */}
      <section className='weather-api-section'>
        <p className='city-weather-api'>Kharkiv</p>
        <p className='current-date-and-time'>{currentDateAndTime}</p>
        <WeatherIcon className='weather-icon' currentWeatherCondition={weather?.condition} />
        <h4 id='temperature-weather'>{weather?.temperature} °C</h4>
      </section>
      <section className='List-Section'>
        <List
          instructions={isGoodWeather ? <span>The weather is awesome! <br /> Go outside and</span> : <span>Bad weather outside! <br /> Here is what you can do now</span>}
          activities={isGoodWeather ? goodWeatherActivities : badWeatherActivities}
          onDeleteActivity={DeleteActivity}>
        </List >
      </section>
      <Form onAddActivity={AddActivity} />
    </div>
  )
}

export default App
