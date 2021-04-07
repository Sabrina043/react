import React from "react";
import './App.css';
import { App } from "App.js";
import directions_walk from "..elsy/src/components/directions_walk_black_24dp(1).svg";
import { Steps } from "../elsy/src/components/Steps.jsx";
// import { Steps } from "Steps.jsx";


class Child extends React.Component {
  render() {
    return (
      <div>
        <h1 className="text-primary">Hello !</h1>
      </div>
    );
  }
}

export default Child;
