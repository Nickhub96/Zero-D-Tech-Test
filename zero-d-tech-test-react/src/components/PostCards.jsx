import React, { Component } from "react";

export default class PostCards extends Component {
  render() {
    const { post } = this.props;
    return (
      <li>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </li>
    );
  }
}
