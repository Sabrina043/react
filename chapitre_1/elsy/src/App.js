import React from "react";
import './App.css';
import Box from "./components/Box.jsx";
import "./styles/global.css";



const tempMin = -20
const tempMax = 40
const heartMin = 80
const heartMax = 180
const stepMin = 0
const stepMax = 50000

class App extends React.Component {

  constructor() {

      super()

      this.state= {

        Water: 0,
        Heart: 120,
        Temperature: -10,
        Steps: 3000

      };

      this.render = this.render.bind(this)
  };

  render() {
    return (
      <div className= "container-fluid">
 
        <div className= "row">

      

     {/*water  */}
      <Box icon = "local_drink" color = {'#3A85FF'} value = {this.state.water} unit = "L"></Box>

      {/*Steps */}
      <Box icon = "directions_walk" color = 'black' value = {this.state.steps} unit = "steps"  min = {stepMin} max= {stepMax} iconChange={this.changeIcon}></Box>

      {/* Heart*/}
      <Box icon = "favorite" color = 'red' value = {this.state.heart} unit = "bpm" min = {heartMin} max= {heartMax} heartChange= {this.changeHeart} ></Box>

      {/* Temperature */}
      <Box icon = "wb_sunny" color = 'yellow' value = {this.state.temperature} unit = "°C" min = {tempMin} max= {tempMax} sunnyChange={this.changeTemp} ></Box>

       

        </div>
      </div>
    );
  }
}

export default App;