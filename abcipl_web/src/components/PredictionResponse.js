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


    renderPredictionResponse(predictionResponse) {
        if (predictionResponse != null)
            return(
                <Card>                    
                    <CardBody>
                      <CardTitle>{predictionResponse.winning_team}</CardTitle>
                      <CardText>{predictionResponse.wicket}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }



    render() {
     
      alert("richa"+this.props.predictionResponse);
      

     


	   return (
            <div className="container">
                <div className="row">               
                <div  className="col-12 col-md-5 m-1">
                <center><h1>Prediction Responses</h1></center>
                {this.renderPredictionResponse(this.props.predictionResponse)}
              </div>
                </div>
               
            </div>
        );
    }
}


  export default PredictionResponses