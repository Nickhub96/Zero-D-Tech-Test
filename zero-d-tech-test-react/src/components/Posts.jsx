import React, { Component } from "react";
import * as api from "../api";
import PostCards from "./PostCards";
import IsLoading from "./IsLoading";

export default class User extends Component {
  state = {
    posts: [],
    title: "",
    body: "",
    isLoading: true,
    user: {}
  };

  render() {
    const { posts, title, body, isLoading, user } = this.state;
    if (isLoading) return <IsLoading />;
    //destructing variables and using IsLoading component while data renders
    return (
      <div>
        <p>{user.name}</p>
        <p>{user.username}</p>
        <p>{user.email}</p>
        <p>{user.website}</p>
        <p>{user.phone}</p>
        <form onSubmit={this.handleSubmit}>
          Make a Post
          <label>
            Title
            <input
              required
              type="text"
              name="title"
              value={title}
              onChange={this.handleInput}
            />
          </label>
          <label>
            Message
            <input
              required
              type="text"
              name="body"
              value={body}
              onChange={this.handleInput}
            />
          </label>
          <button type="submit">Post</button>
        </form>
        <ul>
          {
            //mapping through all the posts made by an individual user to create identical cards for each post
            //passing the posts unique id as the key so every post has a unique identifier
          }
          {posts.map(post => {
            return <PostCards key={post.id} post={post} />;
          })}
        </ul>
      </div>
    );
  }

  handleInput = event => {
    //create a key value pair for every input so it can be passed to the endpoint that will post a new post
    const key = event.target.name;
    const value = event.target.value;
    this.setState({ [key]: value });
  };

  handleSubmit = event => {
    //submitting the input boxes that have been filled to the POST request to post a new post
    const { title, body } = this.state;
    const id = this.props;
    event.preventDefault();
    api.PostNewPost(title, body, id);
    //setting the state here to clear the input boxes once the request has been made
    this.setState({ title: "", body: "" });
  };

  componentDidMount() {
    this.fetchPosts();
    this.fetchUser();
    //first render t0 retrieve all the post data made by that user
  }

  fetchUser = userId => {
    const { id } = this.props;
    userId = id;
    api.getUserById(userId).then(user => {
      this.setState({ user: user });
    });
  };
  fetchPosts = userId => {
    //function created to retrieve the post data and set it in state so it can be used on the page, also setting isLoading to false as the data has been retrieved
    const { id } = this.props;
    userId = id;
    api.getPostsByUser(userId).then(posts => {
      this.setState({ posts: posts, isLoading: false });
    });
  };
}
