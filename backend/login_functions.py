import environment as env 
import sys
from pprint import pprint
from bson.json_util import dumps 
from flask_bcrypt import Bcrypt


def get_user(email):
	cursor = env.client.test_kaleb.cooklist

	res = {}
	for document in cursor.find({"email":email}):
		pprint(document)
		res['user_data'] = document

	return res


def get_access_token(mongodb_user_data, bcrypt):

	# mongodb_user_data = dumps(mongodb_user_data)
	if bcrypt.check_password_hash(mongodb_user_data['password'],password):
		access_token = create_access_token(identity={'first_name':mongodb_user_data['first_name'], 'last_name':mongodb_user_data['last_name'], 'email':mongodb_user_data['email'] })
		response = {"token":access_token}
	else:
		response = {"error":"Invalid username and password"}

	return response