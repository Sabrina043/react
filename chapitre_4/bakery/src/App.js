import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Add from "./Add.jsx"
import Pay from "./Pay.jsx"
import List from "./List.jsx"
import Button from "./Button.jsx"

import './App.css';


class App extends React.Component {

  constructor() {
    super()

    this.state = {

      activeTab: "Add", 
      items: []

    }

  }

  render() {

    
    return (
      <div>
        <button type="button" class="btn btn-outline-primary" isSelected= {this.state.activTab} onClick={this.state.items} >add</button>
        <button type="button" class="btn btn-outline-primary" isSelected= {this.state.activTab} onClick={this.state.items} >pay</button>
        <button type="button" class="btn btn-outline-primary" isSelected= {this.state.activTab} onClick={this.state.items} >list</button>
        {/* <h1>Sabrina</h1> */}
      </div>

    )



  }







} export default App;
