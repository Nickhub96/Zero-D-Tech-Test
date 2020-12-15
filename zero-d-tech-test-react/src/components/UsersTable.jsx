import React from "react";
import { Link } from "@reach/router";
import * as api from "../api";

class UsersTable extends React.Component {
  render() {
    //destructuring user data so and specific keys from user to define what data goes in each column
    const { user } = this.props;
    const { username, id, name } = this.props.user;
    return (
      <tr key={id}>
        {
          //id used as key so each row has unique identifier
        }
        <td>{id}</td>
        <td>
          {
            //passing user data on props so i don't need to make another request for the data in the component it is sent to
          }
          <Link className="userLink" to={`posts/${id}`}>
            {name}
          </Link>
        </td>
        <td>{username}</td>
        <td>
          {
            //call Delete user in the delete button so as to delete the user when it is pressed
          }
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
