import React, { Component } from "react";
import Games from "./components/games";
import './App.css'

class App extends Component {
  render() {
    return (
      <main className="container">
        <Games />
      </main>
    );
  }
}

export default App;
