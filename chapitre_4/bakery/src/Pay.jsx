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

                {/* const listItems = ["muffin", "pain au chocolat", "croissant"] */}

                const newList = listItems.map((elem) => {
                return fetch("mettre un lien... ou est-il??" + elem)
                .then(response => response.json())
                .then(dataCountry => datalistItems[0].name)
                .catch(err => console.error("fetch error", err))
})

console.log("my array Promises is: ", arrayPromises);

Promise.all(arrayPromises)
    .then(res => console.log("result final", res))
    .catch(err => console.error("Promise all error", err))

                <div>

                    <p>{this.state.total}</p>

                </div>
            </div>
        )
    }
}

export default Pay





