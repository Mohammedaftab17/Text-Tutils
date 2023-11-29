import './App.css'
import Alert from './components/Alert'
import Nav from './components/Nav'
import Text from './components/Text'
import { useState } from 'react'



function App() {
  const [mode, setmode] = useState("light")
  const [alert, setalert] = useState(null)

  const showAlert = (message, type) =>{
    setalert({
      message: message,
      type: type
    })
    setTimeout(()=>{
      setalert(null)
    },1500)

  }
  const togglemode = () =>{
    if(mode === "light"){
      setmode("dark")
      document.body.style.backgroundColor = "#042743"
      showAlert("Dark Mode Enable", "success")
    }
    else{
      setmode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light Mode Enable", "success")
    }
  }

  return (
    <>
    <Nav title="Text-Editor" mode = {mode} togglemode = {togglemode}/>
    <Alert alert={alert}/>
    <Text mode = {mode} alert = {showAlert}/>
    </>
  )
}

export default App
