import React, { Component } from 'react';

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class AddPage extends Component {
    
    render() { 
        return (
            <React.Fragment>
                <h1 className="display-4">Add new page</h1>
                <hr />
                <Form>
                    <FormGroup>
                        <Label for="title">Title</Label>
                        <Input type="text" 
                            name="title" 
                            id="title" 
                            placeholder="Page Title..." />
                    </FormGroup>
                    <FormGroup>
                        <Label for="content">Content</Label>
                        <Input type="textarea"
                             name="text" 
                             id="content" />
                    </FormGroup>
                </Form>
            </React.Fragment>
          );
    }
}
 
export default AddPage;