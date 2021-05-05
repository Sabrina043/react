import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Favorites from './Components/Favorites'
import Home from './Components/Home'
import Weekly from './Components/Weekly'
import WeeklyBattle from './Components/WeeklyBattle'
import Popular from './Components/Popular'
import PopularBattle from './Components/PopularBattle'

class App extends Component {


  getMovie() {
    componentDidMount() {

      const API_Key =  'e441f8a3a151d588a4932d2c5d310769',

      fetch("https://api.themoviedb.org/3/movie/550?api_key=")
        .then(res => res.json())
        .then(result => {
        })
        // console.log(fetch);
        .catch(error => console.error(error));
    }
  }

  render() {



    return (

      <div>

        <h1>Je suis dans App</h1>

        <BrowserRouter>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/Popular">Popular</Link></li>
              <li><Link to="/PopularBattle">PopularBattle</Link></li>
              <li><Link to="/Weekly">Weekly</Link></li>
              <li><Link to="/WeeklyBattle">WeeklyBattle</Link></li>
              <li><Link to="/Favorite">Favorites</Link></li>
            </ul>

          </nav>


          <Switch>

            <Route></Route>
            <Route></Route>
            <Route></Route>
            <Route></Route>
            <Route></Route>
            <Route></Route>

          </Switch>



        </BrowserRouter>

      </div>

    );
  }
}

export default App;





