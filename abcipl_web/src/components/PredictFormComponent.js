import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';



class PredictForm extends Component {

    constructor(props) {
        super(props);
  
      
        this.state = {
            team1: 'CSK',
            team2: 'CSK',
            venue: 'AD'           
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }


    render() {


        const team = this.props.teams.map((team) => {
            return (<option value={team.value}>{team.label}</option>)            
        });

        const venue = this.props.venues.map((venue) => {
            return (<option value={venue.value}>{venue.label}</option>)            
        });
      
        return(
            <div className="container">             
                <div className="row row-content">
                   <div className="col-12">
                      <h3>Enter Match Details</h3>
                   </div>
                    <div className="col-12 col-md-9">
                        <Form onSubmit={() => this.props.onSubmit(JSON.stringify(this.state))}>
                            <FormGroup row>
                                <Label htmlFor="team1" md={2}>Team One</Label>
                                <Col md={{size: 7, offset: 1}}>
                                <Input type="select" name="team1" id="team1" 
                                            value={this.state.team1}                                            
                                            onChange={this.handleInputChange}>                                        
                                           {team}
                                    </Input>                                    
                                </Col>
                            </FormGroup>
                            <FormGroup row>           
                                <Label htmlFor="team2" md={2}>Team Two</Label>                    
                                <Col md={{size: 7, offset: 1}}>
                                    <Input type="select" name="team2" id="team2" 
                                            value={this.state.team2}                                          
                                            onChange={this.handleInputChange}>
                                             {team}
                                    </Input>                                    
                                </Col>
                            </FormGroup>     
                            <FormGroup row>           
                                <Label htmlFor="venue" md={2}>Venue</Label>                    
                                <Col md={{size: 7, offset: 1}}>
                                    <Input type="select" name="venue" id="venue" 
                                            value={this.state.venue}                                         
                                            onChange={this.handleInputChange}>
                                           {venue}
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