import React from "react"
import Button from './Button'
import './App.css';
import Card from "./Card"
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends React.Component {

  constructor() {
    super()

    this.state = {

      name: "",
      capital: "",
      flag: "",
      population: "",
      region: "",
    }

    this.getCountry = this.getCountry.bind(this)

  };

  componentDidMount() {
    fetch('https://restcountries.eu/rest/v2/name/france')
      .then(response => response.json())
      .then(result => {

        this.setState({

          name: result[0].name,
          capital: result[0].capital,
          flag: result[0].flag,
          population: result[0].population,
          region: result[0].region
        })
      })
      .catch((error) => console.error(error))
  }


  getCountry(country) {

    fetch('https://restcountries.eu/rest/v2/name/' + country)

      .then(response => response.json())
      .then(result => {

        this.setState({

          name: result[0].name,
          capital: result[0].capital,
          flag: result[0].flag,
          population: result[0].population,
          region: result[0].region

        })
      })
      .catch((error) => console.error(error))
  }

  renderButton() {
    return (
      <div >
        <Button type="button" class="btn btn-outline-primary" clickButton={() => this.getCountry('france')} children='france'></Button>
        <Button clickButton={() => this.getCountry('brazil')} children='brazil'></Button>
        <Button clickButton={() => this.getCountry('croatia')} children='croatia'></Button>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.renderButton()}
        <div className="container">

          <Card flag={this.state.flag} name={this.state.name}
            capital={this.state.capital} population={this.state.population} 
            region={this.state.region}></Card>

        </div>
      </div>

    )

  }


};

export default App








