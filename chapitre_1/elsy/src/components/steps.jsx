import React from "react";
import './App.css';
import directions_walk from "../elsy/src/components/directions_walk_black_24dp(1).svg";
import {App} from '../elsy/src/components/App.js';

// import  Child  from "Child";


class steps extends React.Component {
  render() {
    return (
      <div className="box" className="col-sm-3" className="col-6">

        <img src="directions_walk_black_24dp(1).svg" alt="direction walk"/> 

      </div>
    );
  }
}

export default steps;
