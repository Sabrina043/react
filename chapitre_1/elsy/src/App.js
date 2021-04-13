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

    this.state = {

      Water: 0,
      Heart: 120,
      Temperature: -10,
      Steps: 3000

    };

    this.onHeartChange = this.onHeartChange.bind(this)
    this.onStepsChange = this.onStepsChange.bind(this)
    this.onTemperatureChange = this.onTemperatureChange.bind(this)

  };

  onStepsChange(e) {
    // console.log(e.target);
    this.setState({ steps: e.target.value })
  }
  onHeartChange(e) {
    // console.log(e.target);
    this.setState({ heart: e.target.value })
  }
  onTemperatureChange(e) {
    // console.log(e.target);
    this.setState({ temperature: e.target.value })
  }

  render() {
    return (
      <div className="container-fluid">

        <div className="row">



          {/*water  */}
          <Box icon="local_drink" color={'#3A85FF'} value={this.state.water} unit="L"></Box>

          {/*Steps */}
          <Box icon="directions_walk" color='black' value={this.state.steps} unit="steps" onStepsChange={this.onStepsChange} stepMin={0} stepMax={50000}></Box>

          {/* Heart*/}
          <Box icon="favorite" color='red' value={this.state.heart} unit="bpm" onHeartChange={this.onHeartChange} heartMin={80} heartMax={180}></Box>

          {/* Temperature */}
          <Box icon="wb_sunny" color='yellow' value={this.state.temperature} unit="°C" onTemperatureChange={this.onTemperatureChange} tempMin={-20} tempMax={40}></Box>



        </div>
      </div>
    );
  }
}

export default App;