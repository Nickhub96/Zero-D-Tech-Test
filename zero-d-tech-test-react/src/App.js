import React from "react";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import { Router } from "@reach/router";
import NoMatch from "./components/NoMatch";
import Navigation from "./components/Navigation";
import Posts from "./components/Posts";
import ErrorPage from "./components/ErrorPage";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Navigation />
        <Router>
          <Home path="/" />
          <Posts path="/posts/:id" />
          <ErrorPage default />
        </Router>
      </div>
    );
  }
}

export default App;
