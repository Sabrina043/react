// import React, { Component } from 'react';
// import Card  from './Card'
// import Moment from 'react-moment';

// class Weekly extends Component {

//     state = {
//         movies: []
//     }

//     componentDidMount() {
//         const url = `http://api.themoviedb.org/3/discover/movie?primary_release_date.gte={LAST_WEEK}&primary_release_date.lte=${TODAY}&api_key=${API_KEY}`

//         fetch(url)
//             .then(response => response.json())
//             .then(data => {
//                 console.log("data in popular component did mount", data);

//                 this.setState({
//                     movies: data.results
//                 })
//             })
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Popular</h1>

//                 {
//                     this.state.movies.map(elem => {
//                         return <Card {...elem} />
//                     })
//                 }

//             </div>
//         );
//     }
// }

// export default Weekly;
