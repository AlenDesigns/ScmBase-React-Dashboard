import React, { Component } from "react";
import { connect } from "react-redux";
import { getPosts } from "../../../actions/testActions";

class Home extends Component {
  componentDidMount = () => {
    this.props.getPosts();
  };

  render() {
    return (
      <React.Fragment>
        <h1>Home</h1>
        <hr />
        <p>Welcome to React Dashboard!</p>
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  { getPosts }
)(Home);
