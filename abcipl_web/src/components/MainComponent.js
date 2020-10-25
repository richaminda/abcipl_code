import React , { Component } from 'react';
import { TEAMS } from '../shared/Teams';
import { VENUES } from '../shared/Venues';
import PredictForm from './PredictFormComponent';
import PredictionResponses from './PredictionResponse';


class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {      
        teams: TEAMS,
        venues: VENUES,        
        predictionResponse: null,
        errorMessage: null
    };
  }

  onSubmit(userInputJSON) {       
           

       console.log('Current State is: ' +  userInputJSON);
       alert(userInputJSON);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},            
            body: userInputJSON
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
                predictionResponse: JSON.stringify(data)
               
            
            })
            
            alert(this.state.predictionResponse);
        })
        .catch(error => {
            this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
        });       
  };




  render(){
    return (
      <div>
            <PredictForm teams={this.state.teams} venues={this.state.venues}
            onSubmit={(userInputJSON) => this.onSubmit(userInputJSON)}/>          
            <PredictionResponses predictionResponse={this.state.predictionResponse}/>
        </div>
    );
  }
}

export default Main;
