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
      <div className={Button}>
        
        <Button style = {this.props.isSelected} onClick= {this.props.onClick} children= {this.props.children}/>
        
       



      </div>

    )



  }


} export default Button;