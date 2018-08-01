import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

let token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImJjYzZmOWYxYWFjMzViNWQwZDMzZmFmMmFiNWI2YjRjOGI2OTVmNTNiZmYyMjE4NjUzZjQ2M2YwZWY0MDM1ZWVkMGZmMDIxZGE4YjViZjJkIn0.eyJhdWQiOiIzIiwianRpIjoiYmNjNmY5ZjFhYWMzNWI1ZDBkMzNmYWYyYWI1YjZiNGM4YjY5NWY1M2JmZjIyMTg2NTNmNDYzZjBlZjQwMzVlZWQwZmYwMjFkYThiNWJmMmQiLCJpYXQiOjE1MzMwNTEwMzQsIm5iZiI6MTUzMzA1MTAzNCwiZXhwIjoxNTY0NTg3MDM0LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.eal9wXjSXuuexOLJVrLO7XOFVgaL62EIYGVBXOXLjaT2mPEl8g-MoUKGCTF5a1_1YdB-_92gyyfTwkkdsH3aPtNhsE3jf76PT8yI5nE6lv0ZqMlEhHCAO6gzDuhdajhGiS2X6YqL-haS7oQ7CS3ImxVHn_b3AGdmp7a7IZFB2_ErD4In-rgoJFEKNT-C7pTnkRzUUEQil1j4heOa8FpnVEk5zY0qoIVWQHdMNPnh5xAEUHbUepOvFIVBvAJDSBmBZ1vFMVDQ9nYrvKihJhpt6TZ7EZF5ZsqMvo85J_R5Opp0hcGUp4wv3XvpzBhrJn2tPovMjMTAuWSUgzFyP8qXdlZTf0w7-RlAd2sXeI1HhvZJa8iVqQ1LgbuqTj1VqZjQXBjffpFn7XANfcR8vRbO-APYQZMcoA2VHwjLxqCgw7vD0pl2TPqDpfbK83zUw0pKa9F29yDDKwgigIAVXxe0-rnWUMxI6I7bqCwWmI0yQ2Zx56IVLHUESncjH24Tjf9Yz_9tfSLkYvbiz2z2eetbVXa7_yhg96KmVSTygetHIuvjDX815e0yYbR5Imlo2snJdsZrGx6YDV2t5mOdEUDzmcFZvn38cOUbyKA4qGsuio0QSswHZddb7ETjhkBI7r8Tp2sUJxZKkioa7VE_Cf0r7NVOu7_f3yIeH7QgA0uk49g";

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
