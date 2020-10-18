import React from 'react'
import { isCompositeComponent } from 'react-dom/test-utils';


class PredictionResponses extends isCompositeComponent
{

    constructor(props) {
        super(props);

        this.state = {         
            predictionResponseList: props.predictionResponseList

        };
    }

    render() {
      
        return(
            <div>
                <center><h1>Prediction Responses</h1></center>
                {PredictionResponses.map((predictionResponse) => (
                <div class="card">
                    <div class="card-body">
                    <h5 class="card-title">{predictionResponse.innings_team}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{predictionResponse.winning_team}</h6>
                    <p class="card-text">{predictionResponse.team_score}</p>
                    </div>
                </div>
                ))}
            </div>
            )
    }
}


  export default PredictionResponses