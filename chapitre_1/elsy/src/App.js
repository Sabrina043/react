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

      this.boxFunction = this.boxFunction.bind(this)
  };


  boxFunction(e) {
    // console.log("boxFunction target", e.target);
    // console.log("boxFunction (si l'attribut existe dans le target. pas le cas pour un button par exemple)" ,e.target.type);
    // console.log("boxFunction value", e.target.value);

    if (e.target.type === "Heart") {
        this.setState({
            Heart: e.target.value
        })
    } else if (e.target.id === "Heart") {
        this.setState({
            Heart: e.target.value
        })
    };

};

  
  render() {
    return (
      <div className= "container-fluid">
 
        <div className= "row">

      

     {/*water  */}
      <Box icon = "local_drink" color = {'#3A85FF'} value = {1.5} unit = "L"></Box>

      {/*Steps */}
      <Box icon = "directions_walk" color = 'black' value = {3000} unit = "steps"></Box>

      {/* Heart*/}
      <Box icon = "favorite" color = 'red' value = {120} unit = "bpm"></Box>

      {/* Temperature */}
      <Box icon = "wb_sunny" color = 'yellow' value = {-10} unit = "°C"></Box>

       

        </div>
      </div>
    );
  }
}

export default App;