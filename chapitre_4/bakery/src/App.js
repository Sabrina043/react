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

      activeTab: "add", 
      items: []

    }

  }

  render() {

    

    return (
      <div>
        <Button></Button>
        <Button></Button>
        <Button></Button>
      </div>

    )



  }







} export default App;
