import {
  GET_PAGES,
  GET_PAGE,
  CREATE_PAGE,
  DELETE_PAGE,
  UPDATE_PAGE,
  RESTORE_PAGE,
  DESTROY_PAGE
} from "./types.js";
import axios from "axios";

export function getPages() {
  return dispatch => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(res =>
      dispatch({
        type: GET_POSTS,
        payload: res.data
      })
    );
  };
}

export function getPages() {

}

export function getPage() {

}

export function createPage() {

}

export function deletePage() {

}

export function updatePage() {

}

export function restorePage() {

}

export function destroyPage() {

}
