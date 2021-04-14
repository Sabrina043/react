import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class Button extends React.Component {

//   constructor() {
//     super()

//     this.state = {

//       activeTab: "add", 
//       items: []

//     }

//   }

  render() {

    this.props.isSelected
    this.props.onClick
    this.props.children

    return (
      <div className = {Button}>




      </div>

    )



  }


} export default Button;