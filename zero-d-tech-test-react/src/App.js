import React from "react";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import { Router } from "@reach/router";
import Navigation from "./components/Navigation";
import Posts from "./components/Posts";
import ErrorPage from "./components/ErrorPage";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        {
          // using ReachRouter to build my url pathways for the front end
          //using path to define the url for each page and what  will appear to client in the url
          // ErrorPage is set as the default so all unaccounted for requests will be sent to the ErrorPage
        }
        <Navigation />
        <Header />
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
