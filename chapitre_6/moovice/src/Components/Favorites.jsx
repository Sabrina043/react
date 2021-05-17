import React, { Component } from 'react';

class Favorites extends Component {


    state = {

        movies: [],
        favIDs: this.getStorage()

    }

    getStorage() {

        const Favorites = JSON.parse(localStorage.getItem("favorites"))
        console.log("favorites:", typeof (Favorites));
        return Favorites

    }



    getMovie(id) {

        const API_KEY = "e441f8a3a151d588a4932d2c5d310769"

        const url = (`http://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)

        fetch(url)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    movies:[...this.state.movies, data]
            })
            })
    }


    componentDidMount() {

        this.state.favIDs.map(item => {
            return this.getMovie(item)
        })

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
