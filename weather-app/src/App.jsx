// import { useState } from 'react'
import { useEffect, useState } from 'react'
import './App.css'
import Form from './components/Form.jsx'
import List from './components/List.jsx'
import WeatherBackground from './components/WeatherBackground.jsx'
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
    startFetching();
  }, [])

  function AddActivity(newActivity) {
    setActivities([...activities, { ...newActivity, id: uid() }])
  }
  const isGoodWeather = weather?.isGoodWeather
  console.log("the condition whether isGoodWeather from the api", isGoodWeather)
  console.log("activities:", activities)
  const goodWeatherActivities = activities.filter(activity =>
    activity.isForGoodWeather === true
  )
  console.log(goodWeatherActivities)
  const badWeatherActivities = activities.filter(activity =>
    activity.isForGoodWeather === false
  )

  return (
    <>
      <div className='title'>
        <h1>Weather App</h1>
      </div>
      <section className='weather api'>
        {/* <h4 id='emoji-weather'>{weather?.condition}</h4> */}
        <WeatherBackground className='weather-background' currentWeatherCondition={weather?.condition} />
        <h4 id='temperature-weather'>{weather?.temperature} °C</h4>
      </section>
      <List
        instructions={isGoodWeather ? "The weather is awesome! Go outside and:" : "Bad weather outside! Here's what you can do now:"}
        activities={isGoodWeather ? goodWeatherActivities : badWeatherActivities}>
      </List >
      <Form onAddActivity={AddActivity} />
      {/* <WeatherBackground className='weather-background' currentWeatherCondition={weather?.condition} /> */}
    </>
  )
}

export default App
