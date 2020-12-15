import axios from "axios";

export const getUsers = () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then(({ data }) => {
      return data;
    });
};

export const getUserById = userId => {
  return axios
    .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(({ data }) => {
      return data;
    });
};

export const getPostsByUser = userId => {
  return axios
    .get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then(({ data }) => {
      return data;
    });
};

export const PostNewUser = (name, username, email) => {
  return axios
    .post("https://jsonplaceholder.typicode.com/users", {
      name: name,
      username: username,
      email: email
    })
    .then(({ data }) => {
      console.log("post new user is working", data);
      return data;
    });
};

export const DeleteUser = id => {
  return axios
    .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(data => {
      console.log(data, "deletUser works");
      return data;
    });
};

export const PostNewPost = (title, body, id) => {
  return axios
    .post("https://jsonplaceholder.typicode.com/posts", {
      title: title,
      body: body,
      userID: id
    })
    .then(({ data }) => {
      console.log(data, "post a post is working");
    });
};
