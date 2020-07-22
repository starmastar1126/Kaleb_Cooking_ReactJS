import login_functions as lf

mongodb_user_data = {"_id": {"$oid": "5dabd1043923336d2fa75b1b"}, "name": "asdf", "email": "asdf@comcast.net"}
bcrypt = {'_log_rounds': 12}
res = lf.get_access_token(mongodb_user_data, bcrypt)
