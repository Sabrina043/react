import React from "react"
import './App.css';



class Button extends React.Component {

  render() {

    return (

      <div className = "buttonPays" >

          <button onClick={this.props.clickButton}>{this.props.children}</button>
          
      </div>

    )

  }


};

export default Button