from flask import Flask
from flask import Flask, session, request, jsonify,send_from_directory, json
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from flask_jwt_extended import JWTManager, create_access_token, decode_token
from datetime import datetime
from functools import wraps
import jwt
from pymongo import MongoClient
import sys
from pprint import pprint
import requests
from bson.json_util import dumps 

import cook_functions as cf 
import login_functions as lf

app = Flask(__name__)
#flask_pymongo
app.config["MONGO_URI"] = "mongodb://atlasadmin:UK3o667%Zz4m@cluster0-ykwvb.mongodb.net:27017/test_kaleb"
app.config['JWT_SECRET_KEY'] = 'secret'
app.debug = True
# app.host = 
#pymongo MongoClient
client = MongoClient('mongodb+srv://atlasadmin:UK3o667%Zz4m@cluster0-ykwvb.mongodb.net')
bcrypt = Bcrypt(app)
jwt = JWTManager(app)
CORS(app)


def validate_id_token(f):
	@wraps(f)
	def decorated_function(*args,**kwargs):
		id_token=None
		id_token = request.headers.get('Authorization')
		try:   
			user_data = decode_token(id_token)

			# user_data = user_object.decode_id_token(id_token)
			# app.logger.debug(user_data)
			# present = datetime.utcnow()
			# past = datetime.utcfromtimestamp(int(user_data['exp']))            
			# if(present > past):
			# 	return jsonify({'error':'User token is not valid', 'error_code':503})
			# elif(present < past):
			# 	#app.logger.debug('TOKEN IS STILL VALID')            
			# 	pass
			#app.logger.debug('CURRENT TIME: '+ str(datetime.utcnow()).split('.')[0] )
			#app.logger.debug('CONVERTED TIME: '+str(datetime.utcfromtimestamp(exp_time)) )
			#app.logger.debug(json.dumps(user_data, indent=2))
		except:
			return jsonify({'error':'User token is not valid', 'error_code':503})
		return f(*args,**kwargs)
	return decorated_function

@app.route("/register", methods=['GET', 'POST'])
def register():
	print("were here!!!!!")
	user_data = {}

	cook_dict = request.form.to_dict()

	user_data['first_name'] = cook_dict['first_name']
	user_data['last_name'] = cook_dict['last_name']
	# user_data['username'] = cook_dict['username']
	user_data['email'] = cook_dict['email']
	user_data['password'] = bcrypt.generate_password_hash(cook_dict['password']).decode('utf')
	user_data['created'] = datetime.utcnow()


	#first_collection
	# res = cf.create_new_cook(user_data)
	# print('**************',res)
	# sys.stdout.flush()
	return jsonify({'success':True})

@app.route("/login", methods=['POST'])
def login():
	user_data = request.form.to_dict()
	print('data: ',user_data)
	sys.stdout.flush()

	response = ''
	email = user_data['email']
	password = user_data['password']
	
	mongodb_user_data = lf.get_user(email)['user_data']

	mongodb_user_data = dumps(mongodb_user_data)
	if bcrypt.check_password_hash(mongodb_user_data['password'],password):
		access_token = create_access_token(identity={'first_name':mongodb_user_data['first_name'], 'last_name':mongodb_user_data['last_name'], 'email':mongodb_user_data['email'] })
		response = {"token":access_token, "email":mongodb_user_data['email']}
	else:
		response = {"error":"Invalid username and password"}

	return jsonify(response)

	

	return jsonify(response)

@app.route("/update-profile", methods=['GET'])
# @validate_id_token
def update_profile():
	data = request.args.to_dict()
	print("data: ", data)
	email = data['email']
	mongodb_user_data = lf.get_user(email)['user_data']

	return jsonify(dumps(mongodb_user_data))


@app.route("/get-user", methods=['GET'])
# @validate_id_token
def get_user():
	data = request.args.to_dict()
	print("data: ", data)
	email = data['email']
	mongodb_user_data = lf.get_user(email)['user_data']

	return jsonify(dumps(mongodb_user_data))

if __name__ == "__main__":
	app.run(debug=True,host='0.0.0.0')
