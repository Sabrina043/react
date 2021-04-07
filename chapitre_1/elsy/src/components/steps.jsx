import React from "react";
import './App.css';
import './src/App.js'

class steps extends React.Component {
  render() {
    return (
      <div class= "box" class="col-sm-3" class= "col-6">

        <h1>Hello {this.props.name} ! Bienvenue sur la page {this.props.page}</h1>

      </div>
    );
  }
}

export default steps;
