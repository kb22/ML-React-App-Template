import React, { Component } from 'react';
import './App.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      result: ""
    };
  }

  handlePredictClick = (event) => {
    this.setState({ isLoading: true });
    fetch('https://5e953677-f06d-4229-a8f7-b17679c289b8.mock.pstmn.io/model/predict')
      .then(res => res.json())
      .then(res => {
        this.setState({
          result: res['result'],
          isLoading: false
        });
      });
  }

  handleCancelClick = (event) => {
    this.setState({ result: "" });
  }

  render() {

    const isLoading = this.state.isLoading;
    const result = this.state.result;
    const resultPredicted = this.state.resultPredicted;

    return (
      <Container>
        <div>
          <h1 className="title">This is a title</h1>
        </div>
        <div className="content">
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formText1">
                <Form.Label>Text Field 1</Form.Label>
                <Form.Control type="text" placeholder="Text Field 1" />
              </Form.Group>
              <Form.Group as={Col} controlId="formText2">
                <Form.Label>Text Field 2</Form.Label>
                <Form.Control type="text" placeholder="Text Field 2" />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="FormSelect1">
                <Form.Label>Select 1</Form.Label>
                <Form.Control as="select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId="FormSelect2">
                <Form.Label>Select 2</Form.Label>
                <Form.Control as="select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId="FormSelect3">
                <Form.Label>Select 3</Form.Label>
                <Form.Control as="select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Row>
              <Col>
                <Button
                  block
                  variant="success"
                  disabled={isLoading}
                  onClick={!isLoading ? this.handlePredictClick : null}>
                  { isLoading ? 'Making prediction' : 'Predict' }
                </Button>
              </Col>
              <Col>
                <Button
                  block
                  variant="danger"
                  disabled={isLoading}
                  onClick={this.handleCancelClick}>
                  Reset predictions
                </Button>
              </Col>
            </Row>
          </Form>
          {result === "" ? null :
            (<Row>
              <Col className="result-container">
                <h5 id="result">{result}</h5>
              </Col>
            </Row>)
          }
        </div>
      </Container>
    );
  }
}

export default App;