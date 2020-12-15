import React from "react";

const ErrorPage = err => {
  if (err.default) {
    return <h3>"Oops Page not found"</h3>;
  }
  //standard error message to deal with bad requests
};

export default ErrorPage;
