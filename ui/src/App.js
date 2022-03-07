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
      formData: {
        textfield1: '',
          textfield2: '',
          textfield3: '',
          select1: 0,
          select2: 0,
          select3: 0,
          select4: 0,
          select5: 0,
          select6: 0,
          select7: 0
      },
      result: ""
    };
  }

  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    var formData = this.state.formData;
    formData[name] = value;
    this.setState({
      formData
    });
  }

  handlePredictClick = (event) => {
    const formData = this.state.formData;
    this.setState({ isLoading: true });
    fetch('http://127.0.0.1:5000/prediction/', 
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(response => {
        this.setState({
          result: response.result,
          isLoading: false
        });
      });
  }

  handleCancelClick = (event) => {
    this.setState({ result: "" });
  }

  render() {
    const isLoading = this.state.isLoading;
    const formData = this.state.formData;
    const result = this.state.result;

    return (
      <Container>
        <div>
          <h1 className="title">Edu Path Recommender System</h1>
        </div>
        <div className="content">
          <Form>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Tawjihi Mark</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Tawjihi mark" 
                  name="textfield1"
                  value={formData.textfield1}
                  onChange={this.handleChange} />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Physics Mark</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Physics Mark" 
                  name="textfield2"
                  value={formData.textfield2}
                  onChange={this.handleChange} />
                 </Form.Group>
                  <Form.Group as={Col}>
                            <Form.Label>Math Mark</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Math Mark"
                                name="textfield3"
                                value={formData.textfield3}
                                onChange={this.handleChange} />
                        </Form.Group>
           
              <Form.Group as={Col}>
                <Form.Label>Gender</Form.Label>
                <Form.Control 
                  as="select"
                  value={formData.select1}
                  name="select1"
                  onChange={this.handleChange}>
                                <option>M</option>
                                <option>F</option>
                 
                </Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
              <Form.Group as={Col}>
               <Form.Label>Do you have artistic inclinations</Form.Label>
                <Form.Control 
                  as="select"
                  value={formData.select2}
                  name="select2"
                  onChange={this.handleChange}>
                                <option>NO</option>
                                <option>Yes</option>

              
                </Form.Control>
                        </Form.Group>
                    
              <Form.Group as={Col}>
                <Form.Label>Do you have Analysis inclinations</Form.Label>
                <Form.Control 
                  as="select"
                  value={formData.select3}
                  name="select3"
                  onChange={this.handleChange}>
                                <option>NO</option>
                                <option>Yes</option>

                </Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Do you have Architecture inclinations</Form.Label>
                            <Form.Control
                                as="select"
                                value={formData.select4}
                                name="select4"
                                onChange={this.handleChange}>
                                <option>NO</option>
                                <option>Yes</option>

                            </Form.Control>
                        </Form.Group>
                   
                        <Form.Group as={Col}>
                            <Form.Label>Do you have electronic inclinations</Form.Label>
                            <Form.Control
                                as="select"
                                value={formData.select5}
                                name="select5"
                                onChange={this.handleChange}>
                                <option>NO</option>
                                <option>Yes</option>

                              
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>

                        <Form.Group as={Col}>
                            <Form.Label>Do you have Mechanic inclinations</Form.Label>
                            <Form.Control
                                as="select"
                                value={formData.select6}
                                name="select6"
                                onChange={this.handleChange}>
                                <option>NO</option>
                                <option>Yes</option>
                                
                            </Form.Control>
                        </Form.Group>
                   

                        <Form.Group as={Col}>
                            <Form.Label>Do you have Workout inclinations</Form.Label>
                            <Form.Control
                                as="select"
                                value={formData.select7}
                                name="select7"
                                onChange={this.handleChange}>
                                <option>NO</option>
                                <option>Yes</option>

                            </Form.Control>
                        </Form.Group>
                        </Form.Row>
            <Form.Row>
            </Form.Row>
            <Row>
              <Col>
                <Button
                  block
                  variant="success"
                  disabled={isLoading}
                  onClick={!isLoading ? this.handlePredictClick : null}>
                  { isLoading ? 'Making prediction' : 'Recommend' }
                </Button>
              </Col>
              <Col>
                <Button
                  block
                  variant="danger"
                  disabled={isLoading}
                  onClick={this.handleCancelClick}>
                  Reset Recommendation
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