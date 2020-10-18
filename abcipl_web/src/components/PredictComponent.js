import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap';



class PredictForm extends Component {

    constructor(props) {
        super(props);

        
    this.team_options = [
        { value: 'CSK', label: 'Chennai Super Kings' },
        { value: 'DC', label: 'Delhi Capitals' },
        { value: 'KXIP', label: 'Kings XI Punjab' },
        { value: 'KKR', label: 'Kolkata Knight Riders' },
        { value: 'MI', label: 'Mumbai Indians' },
        { value: 'RR', label: 'Rajasthan Royals' },
        { value: 'RCB', label: 'Royal Challengers Bangalore' },
        { value: 'SRH', label: 'Sunrisers Hyderabad' }
      ]
    
    this.venue_options = [
        { value: 'AD', label: 'Zayed Cricket Stadium, Abu Dhabi' },
        { value: 'DUB', label: 'Dubai International Cricket Stadium, Dubai' },
        { value: 'SHA', label: 'Sharjah Cricket Stadium, Sharjah' } 
      ]

   

        this.state = {
            team1: 'CSK',
            team2: 'CSK',
            venue: 'AD',
            predictionResponse: '',
            predictionResponseList: []

        };

        

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
        
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleSubmit(event) {
        console.log('Current State is: ' + JSON.stringify(this.state));
        
       
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            
            body: JSON.stringify(this.state)
        };
        
        fetch('http://127.0.0.1:5000/predict',requestOptions)
        .then(async response => {
            const data = await response.json();
            
            // check for error response
            if (!response.ok) {
               
                // get error message from body or default to response status
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
            }

            

            

            this.setState({ 
                predictionResponse: JSON.stringify(data),
                predictionResponseList: data
            
            })
        })
        .catch(error => {
            this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
        });
        event.preventDefault();
        
}
    


    render() {
      
        return(
            <div className="container">             
                <div className="row row-content">
                   <div className="col-12">
                      <h3>Enter Match Details</h3>
                   </div>
                    <div className="col-12 col-md-9">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="team1" md={2}>Team One</Label>
                                <Col md={{size: 7, offset: 1}}>
                                <Input type="select" name="team1" id="team1" 
                                            value={this.state.team1}                                            
                                            onChange={this.handleInputChange}>                                        
                                             {this.team_options.map((e, key) => {
                                                return <option value={e.value}>{e.label}</option>;
                                            })}
                                    </Input>                                    
                                </Col>
                            </FormGroup>
                            <FormGroup row>           
                                <Label htmlFor="team2" md={2}>Team Two</Label>                    
                                <Col md={{size: 7, offset: 1}}>
                                    <Input type="select" name="team2" id="team2" 
                                            value={this.state.team2}                                          
                                            onChange={this.handleInputChange}>
                                             {this.team_options.map((e, key) => {
                                        return <option value={e.value}>{e.label}</option>;
                                    })}
                                    </Input>                                    
                                </Col>
                            </FormGroup>     
                            <FormGroup row>           
                                <Label htmlFor="venue" md={2}>Venue</Label>                    
                                <Col md={{size: 7, offset: 1}}>
                                    <Input type="select" name="venue" id="venue" 
                                            value={this.state.venue}                                         
                                            onChange={this.handleInputChange}>
                                            {this.venue_options.map((e, key) => {
                                            return <option value={e.value}>{e.label}</option>;
                                        })}
                                    </Input>                                    
                                </Col>
                            </FormGroup>                                               
                            <FormGroup row>
                                
                                <Col md={{size: 2, offset: 1}}>
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                </Col>
                                <Col md={{size: 2, offset: 1}}>
                                  <Button type="reset" color="primary">
                                        Reset
                                    </Button>
                                </Col>
                            </FormGroup>                            
                        </Form>
                    </div>
                   
               </div>              
            </div>
        )
    }
}

export default PredictForm;