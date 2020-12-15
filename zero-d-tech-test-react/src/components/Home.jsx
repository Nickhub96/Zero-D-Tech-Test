import React from "react";
import * as api from "../api";
import UsersTable from "./UsersTable";
import TableHeader from "./TableHeader";
import IsLoading from "./IsLoading";

class Home extends React.Component {
  state = {
    isLoading: true,
    users: [],
    name: "",
    username: "",
    email: "",
    newUser: []
  };

  render() {
    const { users, name, username, email } = this.state;

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
        <form onSubmit={this.handleSubmit}>
          Add new user{" "}
          <label>
            name
            <input
              required
              type="text"
              name="name"
              value={name}
              onChange={this.handleInput}
            />
          </label>
          <label>
            username
            <input
              required
              type="text"
              name="username"
              value={username}
              onChange={this.handleInput}
            />
          </label>
          <label>
            email
            <input
              required
              type="text"
              name="email"
              value={email}
              onChange={this.handleInput}
            />
          </label>
          <button type="submit">Add </button>
        </form>
      </div>
    );
  }

  handleInput = event => {
    const key = event.target.name;
    const value = event.target.value;
    this.setState({ [key]: value });
  };

  handleSubmit = event => {
    const { name, username, email } = this.state;
    event.preventDefault();
    api.PostNewUser(name, username, email);
  };

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = () => {
    api.getUsers().then(users => {
      this.setState({ users: users, isLoading: false });
    });
  };
}

export default Home;
