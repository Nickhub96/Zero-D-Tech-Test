import React from "react";

const TableHeader = props => {
  const { users } = props;
  let header = Object.keys(users[0]);
  return header
    .map((key, index) => {
      console.log(key);
      return <th key={index}>{key.toUpperCase()}</th>;
    })
    .splice(0, 3);
};

export default TableHeader;
