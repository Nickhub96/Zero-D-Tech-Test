import React from "react";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;
