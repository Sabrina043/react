import React, { Component } from 'react'

class Pay extends Component {

    constructor() {
        super()

        this.state = {

            basket: [],
            total: 0,
            totalTVA: 0,
            totalEcoTax: 0,
            totalTTC: 0,

        }
    }


    handleSelect(name, price) {

        console.log("name et price :", name, price)

    }




    render() {
        return (
            <div>


                <p>{this.props.items}</p>

                <div>
                    
                    {/* {this.props.items.map() => (){ */}


                    {/* } */}
                </div>

                <div>

                    <p>{this.state.total}</p>

                </div>
            </div>
        )
    }
}

export default Pay





