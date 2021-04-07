import React from "react";
import './App.css';
import directions_walk from "..elsy/src/components/directions_walk_black_24dp(1).svg";
// import { Child } from "Child.js";

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

        <div className= "row-Steps">

        <p>Heart : {heartMin}</p>
        <p>Temperature : {tempMin}</p>
        <p>Steps : {stepMin}</p>

        </div>
      </div>
    );
  }
}

export default App;