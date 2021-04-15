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
      activeTab: "Pay" ,
      activeTab: "list",
      items: []

    }

  }

  render() {

    
    return (
      <div>
        <Button children= {Add} isSelected= {activeTab} onClick={3} ></Button>
        <Button children= {List} isSelected= {activeTab} onClick={} ></Button>
        <Button children= {Pay} isSelected= {activeTab} onClick={} ></Button>
        
      </div>

    )



  }







} export default App;
