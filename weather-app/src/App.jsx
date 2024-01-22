// import { useState } from 'react'
import './App.css'
import Form from './components/Form.jsx'
import List from './components/List.jsx'
// import { useState } from 'react'
import { uid } from "uid"
import useLocalStorageState from 'use-local-storage-state'





function App() {

  const [activities, setActivities] = useLocalStorageState("activities", { defaultValue: [] })
  function AddActivity(newActivity) {
    setActivities([...activities, { ...newActivity, id: uid() }])

  }
  const isGoodWeather = true;

  return (
    <>
      <div className='test section'>
        <h1>Weather App</h1>
      </div>
      <List activities={activities} />
      <Form onAddActivity={AddActivity} />
    </>
  )
}

export default App
