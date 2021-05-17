import React, { Component } from 'react';

class Favorites extends Component {

    getStorage() {
        this.state = {

            movies: [],
            favIDs: localStorage.getItem("favIDs")

        }
    }


    getMovie(id){

        const API_KEY ="e441f8a3a151d588a4932d2c5d310769"

        const url = (`http://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)

    }


    componentDidMount(){

        favIDs.map(this.getMovie())
        
    }


    render() {

        return (

            <div>

                <h1>Favorite</h1>

            </div>
        );
    }
}

export default Favorites;
