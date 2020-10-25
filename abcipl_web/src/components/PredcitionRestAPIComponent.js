
import React, { Component } from 'react';


class PredictRestAPI extends Component {

    constructor(props) {
        super(props);
  
    this.state = {         
        predictionResponse: null,
        errorMessage: null
    };
       
    }

    handleSubmit() {
       
        console.log('Current State is: ' +  this.props.userInputJSON);
               alert(this.props.userInputJSON);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},            
            body: this.props.userInputJSON
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
                predictionResponse: JSON.parse(data)
                
            
            })
        })
        .catch(error => {
            this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
        });       
        
}


render() {  
   
     return (          
        <div>
           <script type="text/javascript">
            handleSubmit();
            </script>
        </div>
      );
  }
}


export default PredictRestAPI