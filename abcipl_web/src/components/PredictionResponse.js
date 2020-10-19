import React, { Component } from 'react';

import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class PredictionResponses extends Component
{

    constructor(props) {
        super(props);

        this.state = {         
            

        };
    }

    render() {
      const prediction = this.props.predictionResponseList.map((predictionR) => {
        return(
          			
			 <div  className="col-12 col-md-5 m-1">
			  <center><h1>Prediction Responses</h1></center>
                <Card key={predictionR.id}>                
                  <CardImgOverlay>
                      <CardTitle>{predictionR.winning_team}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
	  });
	  
	   return (
            <div className="container">
                <div className="row">
                    {prediction}
                </div>
                <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                   
                  </div>
                </div>
            </div>
        );
    }
}


  export default PredictionResponses