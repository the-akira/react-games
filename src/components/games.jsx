import React, { Component } from "react";
import { getGames } from "../services/GameService";
import Header from "./header";
import Pagination from "./utils/pagination";
import { paginate } from "./utils/paginate";
import "./games.css";

class Games extends Component {
  state = {
    games: [],
    currentPage: 1,
    pageSize: 4,
    filter: "",
  };

  componentDidMount() {
    this.setState({ games: getGames() });
  }

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleChange = event => {
    this.setState({ filter: event.target.value, currentPage: 1 }); // Reset currentPage to 1 when filtering
  };

  render() {
    const { length: count } = this.state.games;
    const { pageSize, currentPage, games: allGames, filter } = this.state;

    if (count === 0) return <p>There are no games in the database.</p>;

    const lowercasedFilter = filter.toLowerCase();

    const filteredGames = allGames.filter(item => {
      return Object.keys(item).some(key =>
        typeof item[key] === "string" && item[key].toLowerCase().includes(lowercasedFilter)
      );
    });
    
    const games = paginate(filteredGames, currentPage, pageSize);

    return (
      <React.Fragment>
        <Header />

        <p className="info">Showing <b>{filteredGames.length}</b> game's in the database.</p>

        <i className="fa fa-search fa-2x"></i>
        <input 
          className="pesquisa"
          placeholder="Filter games by: title, publisher or director"
          value={filter}
          onChange={this.handleChange}
        />

        <div className="games-container">
          {games.map(game => (
            <div className="game-container" key={game._id}>
              <h4 className="title">{game.title}</h4>
              <img className="capa" src={game.image.url} alt={game.title} />
              <p><b>Genre:</b> {game.genre.name}</p>
              <p><b>Publisher:</b> {game.publisher}</p>
              <p><b>Director:</b> {game.director}</p>
            </div>
          ))}
        </div>

        <Pagination 
          itemsCount={filteredGames.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}

export default Games;