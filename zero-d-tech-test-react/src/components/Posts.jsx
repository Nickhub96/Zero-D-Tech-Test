import React, { Component } from "react";
import * as api from "../api";
import PostCards from "./PostCards";
import IsLoading from "./IsLoading";

export default class User extends Component {
  state = {
    posts: [],
    title: "",
    body: "",
    isLoading: true
  };

  render() {
    const { posts, title, body } = this.state;
    const { isLoading } = this.state;
    if (isLoading) return <IsLoading />;
    return (
      <div>
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
          {posts.map(post => {
            return <PostCards key={post.id} post={post} />;
          })}
        </ul>
      </div>
    );
  }

  handleInput = event => {
    const key = event.target.name;
    const value = event.target.value;
    this.setState({ [key]: value });
  };

  handleSubmit = event => {
    const { title, body } = this.state;
    const id = this.props;
    event.preventDefault();
    api.PostNewPost(title, body, id);
    this.setState({ title: "", body: "" });
  };

  componentDidMount() {
    this.fetchPosts();
  }
  fetchPosts = userId => {
    const { id } = this.props;
    userId = id;
    api.getPostsByUser(userId).then(posts => {
      this.setState({ posts: posts, isLoading: false });
    });
  };
}
