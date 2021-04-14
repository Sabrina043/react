import React from "react";
import './App.css';
import Box from "./components/Box.jsx";
import "./styles/global.css";


const waterMin = 1.5
const tempMin = -10
const tempMax = 40
const heartMin = 80
const heartMax = 180
const stepMin = 0
const stepMax = 50000



class App extends React.Component {

  constructor() {

    super()

    this.state = {

      water: 1.5,
      heart: 120,
      temperature: -10,
      steps: 3000

    };

    this.calculateWater = this.calculateWater.bind(this)
    this.onHeartChange = this.onHeartChange.bind(this)
    this.onStepsChange = this.onStepsChange.bind(this)
    this.onTemperatureChange = this.onTemperatureChange.bind(this)

  };

  onStepsChange(e) {
    // console.log(e.target);
    this.setState({
      steps: e.target.value
    })
    this.calculateWater()
  }
  onHeartChange(e) {
    // console.log(e.target);
    this.setState({
      heart: e.target.value
    })
    this.calculateWater()
  }
  onTemperatureChange(e) {
    // console.log(e.target);
    this.setState({
      temperature: e.target.value
    })
    this.calculateWater()
  }


  calculateWater() {
    if (this.state.temperature > 20) {
      const addTemp = (this.state.temperature -20) * 0.02
      this.setState({
        water: (addTemp + 1.5).toFixed(2)
      })

    } else if (this.state.steps > 20) {
      const addSteps = (this.state.steps) * 0.02
      this.setState({
        steps: (addSteps + 1.5).toFixed(2)
      })


    } else if (this.state.heart > 20) {
      const addHeart = (this.state.heart) * 0.02
      this.setState({
        heart: (addHeart + 1.5).toFixed(2)

      })

    };


  };


  render() {
    return (
      <div className="container-fluid">

        <div className="row">

          {/*water  */}
          <Box icon="local_drink" color={'#3A85FF'} value={this.state.water} unit="L"
            calculateWater={this.calculateWater} waterMin={1,5}></Box>

          {/*Steps */}
          <Box icon="directions_walk" color='black' value={this.state.steps} unit="steps"
            onStepsChange={this.onStepsChange} stepMin={0} stepMax={50000}></Box>

          {/* Heart*/}
          <Box icon="favorite" color='red' value={this.state.heart} unit="bpm"
            onHeartChange={this.onHeartChange} heartMin={80} heartMax={180}></Box>

          {/* Temperature */}
          <Box icon="wb_sunny" color='yellow' value={this.state.temperature}
            unit="°C" onTemperatureChange={this.onTemperatureChange} tempMin={-20} tempMax={40}></Box>



        </div>
      </div>
    );
  }
}

export default App;