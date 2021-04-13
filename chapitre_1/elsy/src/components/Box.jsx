import React from "react";





class Box extends React.Component {

  render() {

    const { color, unit, value, min, max, icon, onChange } = this.props

    if (icon !== "local_drink")

      return (
        <div className="box col-sm-3 col-6">
          <span class="material-icons" style={{ fontSize: 100, color: this.props.color }}>
            {this.props.icon}
          </span>
          <p>{this.props.value} {this.props.unit}</p>

          <div className = "row">

            <div className = "col">

            <input type="range" min={min} max={max} value="" onInput={onChange} />

            </div>

          </div>

        </div>

      )
  }
}

export default Box;
