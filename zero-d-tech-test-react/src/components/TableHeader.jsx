import React from "react";

const TableHeader = props => {
  //destructuring users dat from props
  const { users } = props;
  //looping through the users data to collect all the keys to create a header
  let header = Object.keys(users[0]);
  //mapping through the keys to give each one a uniques identifier and allow the keys to be used as headers in a table
  return (
    header
      .map((key, index) => {
        return <th key={index}>{key.toUpperCase()}</th>;
      })
      //removing the unused headers
      .splice(0, 3)
  );
};

export default TableHeader;
