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
    //destructuring variables to make them easier to use and make the code more DRY
    const { isLoading } = this.state;
    if (isLoading) return <IsLoading />;
    //isLoading message while the client waits for the data to render
    return (
      <div>
        <table id="usersTable">
          <tbody>
            <tr>
              {
                // tableHeader component to dynamically create the tables header
              }
              <TableHeader users={users} />
            </tr>
            {
              // mapping through the users data to dynamically create an individual row for every user
            }
            {users.map(user => {
              return <UsersTable user={user} key={user.id} />;
            })}
          </tbody>
        </table>
        {
          //using a form to allow the user to create a new user and make a request to the database to do so
        }
        <form className="addUser" onSubmit={this.handleSubmit}>
          <h2>New User</h2>
          <label>
            Name
            <input
              required
              type="text"
              name="name"
              value={name}
              onChange={this.handleInput}
            />
          </label>
          <label>
            Username
            <input
              required
              type="text"
              name="username"
              value={username}
              onChange={this.handleInput}
            />
          </label>
          <label>
            Email
            <input
              required
              type="text"
              name="email"
              value={email}
              onChange={this.handleInput}
            />
          </label>
          <button className="addButton" type="submit">
            Add{" "}
          </button>
        </form>
      </div>
    );
  }

  handleInput = event => {
    //this function creates a key value pair for each input box so that the inputs can then be used in a request to the database
    const key = event.target.name;
    const value = event.target.value;
    this.setState({ [key]: value });
  };

  handleSubmit = event => {
    //this function is used to make the request to create a new user with the key value pairs created in handleInput
    //event.preventDefault() is used to prevent the submit form from submitting the form  where it is incorrect
    const { name, username, email } = this.state;
    event.preventDefault();
    api.PostNewUser(name, username, email);
  };

  componentDidMount() {
    //fetchUsers is called in componentDidMount to make the initial render for the data and be the first thing that appears to the client when it has loaded
    this.fetchUsers();
  }

  fetchUsers = () => {
    //making a request to the DB for all the users data and then setting it in state
    // setting state of isLoading to false as the user data has successfully been retrieved and the page is no longer loading
    api.getUsers().then(users => {
      this.setState({ users: users, isLoading: false });
    });
  };
}

export default Home;
