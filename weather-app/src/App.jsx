// import { useState } from 'react'
import { useEffect, useState } from 'react'
import './App.css'
import Form from './components/Form.jsx'
import List from './components/List.jsx'
import WeatherIcon from './components/WeatherIcon.jsx'
import Background from './components/Background.jsx'
// import { useState } from 'react'
import { uid } from 'uid'
import useLocalStorageState from 'use-local-storage-state'

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
  // console.log(goodWeatherActivities)
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

  return (
    <>
      <div className='title'>
        <h1 className='app-title'>Weather App</h1>
      </div>
      <Background className="background-app" currentWeatherCondition={weather?.condition}>
        <section className='weather-api-section'>
          {/* <h4 id='emoji-weather'>{weather?.condition}</h4> */}
          <p className='city-weather-api'>Kharkiv</p>
          <p className='current-date-and-time'>{currentDateAndTime}</p>
          <WeatherIcon className='weather-background' currentWeatherCondition={weather?.condition} />
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
      </Background>
    </>
  )
}

export default App
