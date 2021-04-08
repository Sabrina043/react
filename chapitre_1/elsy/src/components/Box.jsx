import React from "react";


// import  Child  from "Child";


class steps extends React.Component {
  render() {
    return (
      <div className="box" className="col-sm-3" className="col-6">


        <span class="material-icons"x style={{fontSize: 100, color: this.props.color }}>
        {this.props.icon}
        </span>
        <p>{this.props.value} {this.props.unit}</p>

      </div>
    );
  }
}

export default steps;
