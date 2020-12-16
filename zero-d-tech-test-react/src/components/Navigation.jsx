import React from "react";
import { Link } from "@reach/router";

const Navigation = () => {
  return (
    //Navigation bar with a link to the Home page
    <nav>
      <ul className="navbar">
        <li className="nav">
          <Link to="/">Home</Link>
        </li>
        <li className="nav">About</li>
        <li className="nav">Contact</li>
      </ul>
    </nav>
  );
};

export default Navigation;
