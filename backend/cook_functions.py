import environment as env 
import sys
from pprint import pprint
from bson.json_util import dumps


def create_new_cook(cook_dict):
	cursor = env.client.test_kaleb.cooklist
	# print(cursor)
	email = cook_dict['email']
	cook_exists = []
	res ={}
	for document in cursor.find({"email":email}):
		print("document: ", document)
		id_doc = document['_id']
		cook_exists.append(document)

	if not cook_exists:	
		cursor.insert_one(cook_dict)
		cook_dict = dumps(cook_dict)
		# id_doc = cook_dict['_id']
		# del cook_dict['_id']
		print("cook_dict: ", cook_dict)
		print("new cook created!: ",cook_dict)
		# cursor.remove({'email': email})
		res = cook_dict
	else: 
		res = {"error":"cook already exists"}
	
	return res


