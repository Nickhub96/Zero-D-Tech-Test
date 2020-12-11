import React from "react";
import { Link } from "@reach/router";

const NoMatch = () => {
  <div className="NoMatch">
    <h2>We could not find the page your looking for..</h2>
    <Link to="/">Go back to the home page</Link>
  </div>;
};
export default NoMatch;
