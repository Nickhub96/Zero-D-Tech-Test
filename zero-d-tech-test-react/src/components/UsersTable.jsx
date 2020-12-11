import React from "react";

const UsersTable = props => {
  const { user } = props;
  const { username, id, name } = user;
  // const { id, users, name, username } = this.props;
  return (
    <tr key={id}>
      <td>{id}</td>
      <td>{name}</td>
      <td>{username}</td>
    </tr>
  );
};

export default UsersTable;
