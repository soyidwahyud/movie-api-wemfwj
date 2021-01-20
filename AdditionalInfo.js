import React, { Component } from "react";
import Loader from "react-loader-spinner";

class AdditionalInfo extends Component {
  state = {
    movie: [],
    isLoading: true
  };

  componentDidMount = () => {
    const { id } = this.props;

    if (!id) {
      return;
    }

    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=81f382d33088c6d52099a62eab51d967&language=en-US`
    )
      .then(res => res.json())
      .then(data =>
        this.setState({
          movie: data,
          isLoading: false
        })
      );
  };

  render() {
    const { movie } = this.state;
    return (
      <div className="movieInfo-container">
        
          <div>
            <section className="title" />
            <h1>{movie.title}</h1>
            <section className="cast">ID: {movie.id}</section>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
          </div>
        
      </div>
    );
  }
}

export default AdditionalInfo;
