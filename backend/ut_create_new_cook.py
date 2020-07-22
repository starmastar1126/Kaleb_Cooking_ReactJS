import cook_functions as cf 

cook_dict = {'first_name' :"Kaleb", "last_name": "Niven", 'email': 'kaleb.niven51@gmail.com', 'price':14, 'zip_code' :75252, 'age':29, 'gender':"male", 'cook_or_chef':"cook", 'specialty_foods':["pizza"], 'cuisines': ['Italian', 'Mederainnian'], 'diet': ['Vegetarian', 'Keto', 'Vegan'], "social_profiles": {'Instagram': 'https://www.instagram.com/kalebniven/', 'pinterest': 'https://www.pinterest.com', 'youtube':'https://www.youtube.com'},  "rank":'4.9', "stars":5, "reviews":'88', "profile_image":"asdf.png"}

# cook_dict = {'name': 'kaleb', 'email': 'kaleb@comcast.net'}

	# print(cook_dict)


res = cf.create_new_cook(cook_dict)

# print(res)
