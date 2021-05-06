import React, { Component } from 'react';

class Favorites extends Component {

    getStorage() {
        this.state = {

            movies: [],
            favIDs: localStorage.getItem("favIDs")

        }
    }


    getMovie(id){

        fetch("http://api.themoviedb.org/3/movie/{ID}?api_key={API_KEY}")

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
