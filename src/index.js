import React from "react";
import ReactDOM from "react-dom";

// Main Application
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";

// Redux
import store from "./store";
import { Provider } from "react-redux";

// React router
import { BrowserRouter as Router } from "react-router-dom";

// Styling
import "hover.css/css/hover-min.css";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
