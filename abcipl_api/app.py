from flask import Flask, jsonify, request
from flask_cors import CORS
from datetime import datetime
import json

app = Flask(__name__)
CORS(app)

prediction =   '{   "team1": "CSK",   "team2": "MI",   "venue": "DU",   "innings_team": "CSK",  "winning_team": "CSK",  "team_score": "200",  "individual_highest_score": "200",  "wicket": "12"   }'

def predict(match_input):
    return prediction


@app.route('/')
@app.route('/predict', methods=['POST'])
def inex():    
   
    match_input_one = {        
        'team1': request.json['team1'],
        'team2': request.json['team2'],
        'venue': request.json['venue'],
        'innings_team': request.json['team1'],
    }

    prediction_response = []
    prediction_response.append(json.loads(predict(match_input_one)))

    match_input_two = {        
        'team1': request.json['team1'],
        'team2': request.json['team2'],
        'venue': request.json['venue'],
        'innings_team': request.json['team2'],
    }
  
    prediction_response.append(json.loads(predict(match_input_one)))

    return jsonify(prediction_response)






