import React from "react";
import { Link } from "@reach/router";

const Navigation = () => {
  return (
    <nav>
      <Link to="/" className="nav-link">
        Home
      </Link>
    </nav>
  );
};

export default Navigation;
