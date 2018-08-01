import { GET_POSTS } from "./types.js";
import axios from "axios";

export function getPosts() {
  return dispatch => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(res =>
      dispatch({
        type: GET_POSTS,
        payload: res.data
      })
    );
  };
}
