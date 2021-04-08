import React from "react";
import './App.css';
import Box from "./components/Box.jsx"
// import global from "../styles/global.css"

const tempMin = -20
const tempMax = 40
const heartMin = 80
const heartMax = 180
const stepMin = 0
const stepMax = 50000

class App extends React.Component {
  render() {
    return (
      <div className= "container-fluid">

        <div className= "row">
     {/*water  */}
      <Box icon = "local_drink" color = {'#3A85FF'} value = {1.5} unit = "L"></Box>

      {/*Steps */}
      <Box icon = "directon_walk" color = {'#3A85FF'} value = {1.5} unit = "L"></Box>

      {/* Heart*/}
      <Box icon = "directon_walk" color = {'#3A85FF'} value = {1.5} unit = "L"></Box>

      {/* Temperature */}
      <Box icon = "directon_walk" color = {'#3A85FF'} value = {1.5} unit = "L"></Box>


        <p>Heart : {heartMin}</p>
        <p>Temperature : {tempMin}</p>
        <p>Steps : {stepMin}</p>

        </div>
      </div>
    );
  }
}

export default App;