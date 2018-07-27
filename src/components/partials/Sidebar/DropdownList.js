import React, { Component } from 'react';
import { Collapse } from 'reactstrap';

class DropdownList extends Component {
  constructor(props) {
    super(props);

    this.state = { collapse: false };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <React.Fragment>
        <a color="primary" onClick={this.toggle} className={this.props.linkClass}>Toggle</a>
        <Collapse isOpen={this.state.collapse}>
          DROP
        </Collapse>
      </React.Fragment>
    );
  }
}

export default DropdownList;