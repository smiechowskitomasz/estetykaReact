import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "../styles/App.sass";
import Navigation from "../layouts/Navigation";

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <Navigation />
      </Router>
    );
  }
}

export default App;
