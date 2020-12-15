import React from "react";
import { Link } from "@reach/router";
import * as api from "../api";

class UsersTable extends React.Component {
  state = { user: [], isLoading: true };

  // const { id, users, name, username } = this.props;

  render() {
    const { user } = this.props;
    const { username, id, name } = user;
    return (
      <tr key={id}>
        <td>{id}</td>
        <td>
          <Link className="userLink" to={`posts/${id}`} user={user}>
            {name}
          </Link>
        </td>
        <td>{username}</td>
        <td>
          <button
            onClick={() => {
              if (user) {
                api.DeleteUser(id);
              }
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default UsersTable;
