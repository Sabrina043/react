import './App.css';
import React from 'react'
import {BrowserRouter, Route, Link, Switch} from "react-router-dom"
import Home from './component/Home' 
import Contact from './component/Contact' 
import About from './component/About' 
import error_404 from './component/error_404'




class App extends React.Component{

    render(){
        return(

            <div>

                <BrowserRouter>

                    <nav>

                        <ul>
                            <li><link to = "/"/>Home</li>
                            <li><link to = "/about"/>About</li>
                            <li><link to = "/Contact"/>Contact</li>

                        </ul>
                    </nav>
                    

                </BrowserRouter>
                
            </div>
        )
    }



} export default App







