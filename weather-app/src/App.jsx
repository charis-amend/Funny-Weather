// import { useState } from 'react'
import './App.css'
import Form from './components/Form.jsx'
import { useState } from 'react'

function App() {

  const [activities, setActivities] = useState("")
  function AddActivity(newActivity) {
    setActivities([...activities, { newActivity }])
  }

  return (
    <>
      <div className='test section'>
        <h1>Weather App</h1>
      </div>

      <Form onAddActivity={AddActivity} />
    </>
  )
}

export default App
