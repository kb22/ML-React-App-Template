from flask import Flask, request, jsonify, make_response
from flask_restplus import Api, Resource, fields
from sklearn.externals import joblib
import numpy as np
import sys

flask_app = Flask(__name__)
app = Api(app = flask_app, 
		  version = "1.0", 
		  title = "Flight Delay Predictor", 
		  description = "Predict if your flight will be delayed")

name_space = app.namespace('prediction', description='Prediction APIs')

model = app.model('Prediction params', 
				  {'sepalLength': fields.Float(required = True, 
				  							   description="Day of the Week", 
    					  				 	   help="Sepal Length cannot be blank"),
				  'sepalWidth': fields.Float(required = True, 
				  							   description="Origin", 
    					  				 	   help="Sepal Width cannot be blank"),
				  'petalLength': fields.Float(required = True, 
				  							description="Time", 
    					  				 	help="Petal Length cannot be blank"),
				  'petalWidth': fields.Float(required = True, 
				  							description="Petal Width", 
    					  				 	help="Petal Width cannot be blank")})

classifier = joblib.load('classifier.joblib')

@name_space.route("/")
class MainClass(Resource):

	def options(self):
		response = make_response()
		response.headers.add("Access-Control-Allow-Origin", "*")
		response.headers.add('Access-Control-Allow-Headers', "*")
		response.headers.add('Access-Control-Allow-Methods', "*")
		return response

	@app.expect(model)		
	def post(self):
		try: 
			formData = request.json
			data = [val for val in formData.values()]
			prediction = classifier.predict(np.array(data).reshape(1, -1))
			types = { 0: "ON TIME", 1: "LATE ", 2: "Iris Virginica"}
			response = jsonify({
				"statusCode": 200,
				"status": "Prediction made",
				"result": "My flight will be " + types[prediction[0]]
				})
			response.headers.add('Access-Control-Allow-Origin', '*')
			return response
		except Exception as error:
			return jsonify({
				"statusCode": 500,
				"status": "Could not make prediction",
				"error": str(error)
			})
