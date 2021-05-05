import './App.css';
import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Listmovies from './component/Listmovies.json'
import Home from './component/Home'
import About from './component/About'
import PageNotFound from './component/PageNotFound'




class App extends React.Component {

    constructor() {
        super()

        this.state = {

            id: "",
            title: "",
            director: "",
            stars: "",
            image: "",
            description: "",
        }   

    }



    render() {

        return (

            <div>

                <BrowserRouter>

                    <nav>

                        <ul>

                            <li><Link to="/" />Home</li>
                            <li><Link to="/about" />About</li>

                        </ul>

                    </nav>

                    <Switch>
                        <Route exact path="/" component={Home} movies={this.state.id}></Route>
                        <Route path="/About" component={About}  ></Route>
                        <Route path="/PageNotFound" component={PageNotFound} ></Route>
                    </Switch>

                </BrowserRouter>



            </div>
        )
    }



} export default App







