import axios from "axios";

export const getUsers = () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then(({ data }) => {
      // console.log(data);
      return data;
    });
};

// export const getPostsByUser = () => {
//   return axios.get()
// }
