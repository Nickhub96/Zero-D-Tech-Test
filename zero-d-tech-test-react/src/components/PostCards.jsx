import React, { Component } from "react";

export default class PostCards extends Component {
  render() {
    const { post } = this.props;
    //destructing the post data that has been passed down on props
    return (
      <li>
        {
          //using the post data that has been passed down to create identical cards for every post
        }
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </li>
    );
  }
}
