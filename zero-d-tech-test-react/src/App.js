import React from "react";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import { Router } from "@reach/router";
import NoMatch from "./components/NoMatch";
import Navigation from "./components/Navigation";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Navigation />
        <Router>
          <Home path="/" />
          <NoMatch default />
        </Router>
      </div>
    );
  }
}

export default App;
