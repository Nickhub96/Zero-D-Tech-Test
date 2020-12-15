import React from "react";
import { Link } from "@reach/router";

const Navigation = () => {
  return (
    //Navigation bar with a link to the Home page
    <nav className="nav">
      <Link to="/" className="nav-link">
        Home
      </Link>
    </nav>
  );
};

export default Navigation;
