import $ from 'jquery'


const API_URL = 'http://api.bookyourcook.co/'
const local_url = 'http://localhost:5000/'

// function to standerdize ajax calls
export function ajaxCall(url, data, success, type, errorCallback) {
	let api_url = local_url+url
	let cur_ip = window.location.host
	
	if (type === undefined)
		type = 'GET'

	var authorization = ""
	var id_token = window.sessionStorage.getItem('id_token')

	if (id_token)
		authorization = id_token
	console.log("url : ", api_url)
	// set ajax object
	var ajaxObj = {
		url: api_url,
		type: type,
		data: data,
		dataType: 'json',
		headers: {"Authorization": authorization},
		success: function(response) {
			// check if user is logged in
			if (response) {
				if (response.error_code) {

					if (response.error_code == 503) {

						// reauthenticate
						logOut(true)
					}
					if (errorCallback){
						errorCallback(response)
					}
					// console.log("response.error_code: ", response.error_code)
					console.log("response error: ", response)
				} else {

					success(response)
				}
			}
		},
		error: function(jqXHR, textStatus, errorThrow) {
			if (jqXHR.status == 401 || jqXHR.status == 0) {

				// logout()

			} else {
				if (errorCallback)
					errorCallback()
				console.log('AJAX error')
				console.log("jqXHR: ", jqXHR)
				console.log("textStatus: ", textStatus)
				console.log("errorThrow: ", errorThrow)
			}
		}
	}

	// perform ajax call
	return $.ajax(ajaxObj)
}

function logOut(redirect) {
	let cur_ip = window.location.host
	// window.sessionStorage.clear()

	if (redirect) {

		// window.location.replace(cur_ip)
	}
}