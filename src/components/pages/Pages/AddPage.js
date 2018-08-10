import React, { Component } from "react";

import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container
} from "reactstrap";

class AddPage extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="page-heading">Add page</h1>
        <Form>
          <FormGroup>
            <Label for="title">Title</Label>
            <Input
              type="text"
              name="title"
              id="title"
              placeholder="Page Title..."
            />
          </FormGroup>
          <FormGroup>
            <Label for="content">Content</Label>
            <Input type="textarea" name="text" id="content" />
          </FormGroup>
          <Button color="danger">Create</Button>
        </Form>
      </React.Fragment>
    );
  }
}

export default AddPage;
