import React, { Component } from 'react';
import Card  from './Card'


class PopularBattle extends Component {

    state = {
        movies: [],
        currentBattle: 0
    }

    componentDidMount() {
        const url = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e441f8a3a151d588a4932d2c5d310769"

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log("data in popular component did mount", data);

                this.setState({
                    movies: data.results
                })
            })
    }


    render() {
        return (
            <div>

                <h1>Popular Battle</h1>

                {
                    this.state.movies.map(elem => {
                        return <Card {...elem} />
                    })
                }
            </div>
        );
    }
}

export default PopularBattle;
