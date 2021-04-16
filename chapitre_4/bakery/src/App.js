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

    this.selectAdd = this.selectAdd.bind(this)
    this.selectList = this.selectList.bind(this)
    this.selectPay = this.selectPay.bind(this)

  }



  selectAdd() {

    this.setState({

      activeTab: "add"
    })

    this.selectAdd()

  }


  selectList() {


    this.setState({

      activeTab: "list"

    })

    this.selectList()
  }

  selectPay() {


    this.setState({

      activeTab: "pay"

    })

    this.selectPay()
  };

  renderPay() {

    return (

      <div>
        <button> renderPay.onClick: {this.selectPay}</button>
      </div>

    )


  }

  renderList() {

    return (
      <div>
        <button> renderList.onClick: {this.selectList}</button>
      </div>
    )

  }


  renderAdd() {

    return (

      <div>
        <button> renderAdd.onClick: {this.selectAdd}</button>
      </div>

    )

  }

  render() {


    return (
      <div>

        <h1>Bakery</h1>

        <button type="button" class="btn btn-outline-primary" isSelected={this.state.activTab}
          onClick={this.selectAdd} >Add</button>

        <button type="button" class="btn btn-outline-primary" isSelected={this.state.activTab}
          onClick={this.selectPay} >Pay</button>

        <button type="button" class="btn btn-outline-primary" isSelected={this.state.activTab}
          onClick={this.selectList} >List</button>
        {/* <h1>Sabrina</h1> */}
      </div>

    )


  }


} export default App

















