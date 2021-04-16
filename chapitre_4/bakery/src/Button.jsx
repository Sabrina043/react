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

    const {isSelected, onClick, children} = this.props


    return (
      <div>
        
        <button isSelected={isSelected} onClick= {onClick}>{children}</button>


       



      </div>

    )



  }


} export default Button;