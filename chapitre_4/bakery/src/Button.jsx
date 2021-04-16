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




    return (
      <div>
        
        <button onSelect={this.props.isSelected}  {this.props.children} {this.props.onClick}/>


       



      </div>

    )



  }


} export default Button;