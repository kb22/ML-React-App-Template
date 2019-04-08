import React, { Component } from 'react';
import './App.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <Container>
        <div>
          <h1 className="title">This is a title</h1>
        </div>
        <div className="content">
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Form.Row>
          </Form>
        </div>
      </Container>
    );
  }
}

export default App;

      // <div className="App">
      //   <div className="title">
      //     <h1>ML App</h1>
      //   </div>
      //   <Form>
      //     <Form.Row>
      //       <Form.Group as={Col} controlId="formGridEmail">
      //         <Form.Label>Email</Form.Label>
      //         <Form.Control type="email" placeholder="Enter email" />
      //       </Form.Group>

      //       <Form.Group as={Col} controlId="formGridPassword">
      //         <Form.Label>Password</Form.Label>
      //         <Form.Control type="password" placeholder="Password" />
      //       </Form.Group>
      //     </Form.Row>

      //     <Form.Group controlId="formGridAddress1">
      //       <Form.Label>Address</Form.Label>
      //       <Form.Control placeholder="1234 Main St" />
      //     </Form.Group>

      //     <Form.Group controlId="formGridAddress2">
      //       <Form.Label>Address 2</Form.Label>
      //       <Form.Control placeholder="Apartment, studio, or floor" />
      //     </Form.Group>

      //     <Form.Row>
      //       <Form.Group as={Col} controlId="formGridCity">
      //         <Form.Label>City</Form.Label>
      //         <Form.Control />
      //       </Form.Group>

      //       <Form.Group as={Col} controlId="formGridState">
      //         <Form.Label>State</Form.Label>
      //         <Form.Control as="select">
      //           <option>Choose...</option>
      //           <option>...</option>
      //         </Form.Control>
      //       </Form.Group>

      //       <Form.Group as={Col} controlId="formGridZip">
      //         <Form.Label>Zip</Form.Label>
      //         <Form.Control />
      //       </Form.Group>
      //     </Form.Row>

      //     <Form.Group id="formGridCheckbox">
      //       <Form.Check type="checkbox" label="Check me out" />
      //     </Form.Group>

      //     <Button variant="primary" type="submit">
      //       Submit
      //     </Button>
      //   </Form>;
      // </div>