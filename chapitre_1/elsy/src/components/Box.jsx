import React from "react";


class Box extends React.Component {
  renderHeart() {
    if (this.props.unit === "bpm") {
      return (<input type="range"
        min={this.props.heartMin}
        max={this.props.heartMax}
        value={this.props.heart}
        onChange={this.props.onHeartChange} />)
    }
  }
  renderStep() {
    if (this.props.unit === "steps") {
      return (<input type="range"
        min={this.props.steptMin}
        max={this.props.stepMax}
        value={this.props.steps}
        onChange={this.props.onStepsChange} />)
    }
  }
  renderTemperature() {
    if (this.props.unit === "°C") {
      return (<input type="range"
        min={this.props.tempMin}
        max={this.props.tempMax}
        value={this.props.temperature}
        onChange={this.props.onTemperatureChange} />)
    }
  }



  render() {

    return (

      <div className="box col-sm-3 col-6">

        <span className="material-icons" style={{ fontSize: 100, color: this.props.color }}>
          {this.props.icon}

        </span>
        <p>{this.props.value} {this.props.unit} </p>
        {this.renderHeart()}
        {this.renderStep()}
        {this.renderTemperature()}


      </div>



    )



  }



} export default Box;
