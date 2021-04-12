import React from "react"
import Counter from "./components/Counter"
import "./App.css"
import "./components/button.css"



class App extends React.Component {

    constructor() {
        super()
        this.state = {
            count: 0
        }

        this.decrementCount = this.decrementCount.bind(this)
        this.incrementCount = this.incrementCount.bind(this)

    }

    decrementCount() {

        const { count } = this.state
        if (count > 0)
        this.setState({
            count: count - 1

        })
    }

    incrementCount() {

        const { count } = this.state
        if(count<100)
        this.setState({
            count: count + 1

        })

    }

    render(){
        return(
            <div>
                <h1>Counter</h1>
{/* 
                <h2>{this.state.counte}</h2>
                <button className="btn redBg" onClick={this.props.decrementCount}>-</button>
                <button className="btn greenBg" onClick={this.props.incrementCount}>+</button> */}

                <Counter count={this.state.count} addFunction={this.incrementCount} removeFunction={this.decrementCount}></Counter>



            </div>
        )
    }



}

export default App