import login_functions as lf 

email = 'asdf@comcast.net'
res = lf.get_user(email)
print(res)
if res:
	print("true")
else:
	print("false")