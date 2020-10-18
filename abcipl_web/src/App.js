import React , { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PredictForm from './components/PredictComponent';
import PredictionResponses from './components/PredictionResponse';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      
      predictionResponseList: []
    };
  }

  render(){
    return (
      <div>
        <PredictForm />
        <PredictionResponses predictionResponseList={this.state.predictionResponseList}/>
        </div>
    );
  }
}

export default App;
