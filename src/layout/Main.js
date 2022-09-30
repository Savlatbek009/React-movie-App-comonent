import React, { Component } from "react";
import Loader from "../components/Loader";
import Movies from "../components/Movies";
import Search from "../components/Search";

class Main extends Component {
  state = {
    movies: [],
  };
  componentDidMount() {
    fetch("http://www.omdbapi.com/?apikey=329ffa13&s=avengers")
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  }
  searchPanel = (str) => {
    fetch(`http://www.omdbapi.com/?apikey=329ffa13&s=${str}`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  };
  render() {
    return (
      <div className="content">
        <br />
        <Search searchPanel={this.searchPanel} />
        {this.state.movies.length ? (
          <Movies movies={this.state.movies} />
        ) : (
          <Loader />
        )}
      </div>
    );
  }
}

export default Main;
