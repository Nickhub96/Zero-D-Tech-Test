import React from "react";
import * as api from "../api";
import UsersTable from "./UsersTable";
import TableHeader from "./TableHeader";
import IsLoading from "./IsLoading";

class Home extends React.Component {
  state = {
    isLoading: true,
    users: []
  };

  render() {
    const { users } = this.state;

    const { isLoading } = this.state;
    if (isLoading) return <IsLoading />;
    return (
      <div>
        <table id="usersTable">
          <tbody>
            <tr>
              <TableHeader users={users} />
            </tr>
            {users.map(user => {
              return <UsersTable user={user} key={user.id} />;
            })}
          </tbody>
        </table>
      </div>
    );
  }

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = () => {
    api.getUsers().then(users => {
      this.setState({ users: users });
      this.setState({ isLoading: false });
    });
  };
}

export default Home;
