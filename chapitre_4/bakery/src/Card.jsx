import React from 'react'


class Card extends React.Component {

    constructor() {
        super()

        this.state = {
            images: "./images/item.png"
        }
    }


    render() {

        return (
            <div>
                <span productName={this.props.productName} price={this.props.price}
                    onClick={this.props.onClick}></span>
                    <button onClick={this.props.onClick(productName, price)}>{this.state.images}</button>

            </div>




        )

    }

}export default Card