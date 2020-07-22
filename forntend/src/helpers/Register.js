import React from 'react'
import $ from 'jquery'
import {ajaxCall} from '../components/common.js'

class Register extends React.Component{
	constructor(props){
        super(props);
        this.state = {
			modalIsOpen : this.props.modalIsOpen,
			currentTab: 0,
        }
		this.validateForm = this.validateForm.bind(this);
		this.showTab = this.showTab.bind(this);
		this.fixStepIndicator = this.fixStepIndicator.bind(this);
		this.validateForm = this.validateForm.bind(this);
		// this.closeModal = this.closeModal.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		// this.setState({
		// 	modalIsOpen: nextProps
		// }).then(() =>{
		// 	console.log("modalisopen: ", this.state.modalIsOpen)
		// })
		
	}
	
   validateForm() {
		// This deals with validation of the form fields
		let x, y, i, valid = true;
		x = document.getElementsByClassName("tab");
		y = x[this.state.currentTab].getElementsByTagName("input");
		// A loop that checks every input field in the current tab:
		for (i = 0; i < y.length; i++) {
			// If a field is empty...
			if (y[i].value == "") {
			// add an "invalid" class to the field:
			y[i].className += " invalid";
			// and set the current valid status to false:
			valid = false;
			}
		}
		// If the valid status is true, mark the step as finished and valid:
		if (valid) {
			document.getElementsByClassName("step")[this.state.currentTab].className += " finish";
		}
		return valid; // return the valid status
  }

	showTab(n) {
		// This will display the specified tab of the form ...
		let x = document.getElementsByClassName("tab");
		x[n].style.display = "block";
		// ... and fix the Previous/Next buttons:
		if (n == 0) {
			document.getElementById("prevBtn").style.display = "none";
		} else {
			document.getElementById("prevBtn").style.display = "inline";
		}
		if (n == (x.length - 1)) {
			document.getElementById("nextBtn").innerHTML = "Submit";
		} else {
			document.getElementById("nextBtn").innerHTML = "Next";
		}
		// ... and run a that displays the correct step indicator:
		this.fixStepIndicator(n)
  }

	fixStepIndicator(n) {
		// This removes the "active" class of all steps...
		let i, x = document.getElementsByClassName("step");
		for (i = 0; i < x.length; i++) {
			x[i].className = x[i].className.replace(" active", "");
		}
		//... and adds the "active" class to the current step:
		x[n].className += " active";
    }

	nextPrev(n) {
		// This will figure out which tab to display
		let x = document.getElementsByClassName("tab");
		// Exit the if any field in the current tab is invalid:
		if (n == 1 && !this.validateForm()) return false;
		// Hide the current tab:
		x[this.state.currentTab].style.display = "none";
		// Increase or decrease the current tab by 1:
		this.setState({
			currentTab : this.state.currentTab + n
		})
		// if you have reached the end of the form... :
		if (this.state.currentTab >= x.length) {
			//...the form gets submitted:
			document.getElementById("regForm").submit();
			return false;
		}
		// Otherwise, display the correct tab:
		this.showTab(this.state.currentTab);
  	} 
	register = (e) => {
		e.preventDefault();
		console.log("registering user")
		let queryString = $('#registration_form').serialize();
		console.log("queryString: ",queryString)
		let email = $('#register_email').val()
		console.log("email: ", email)
		let request_args = queryString
		localStorage.setItem("email",email)
		ajaxCall('register', request_args, function(response){
			console.log("register response: ",response)
		}, 'POST')
		// let window_url = local_url + "cookprofile"
		// window.location.replace(window_url)
		this.props.closeModal(false);
	}
	
 	render(){
		return (
			<form noValidate name="registration_form" id="registration_form" onSubmit={(e)=>this.register(e)} className="log_form" /* action="http://api.bookyourcook.co/register" method="post" */>
				<h2 className="nameP1" style={{textAlign:"center"}}>Welcome </h2>
				
				<div className="element tab">
					
					<label className="disP11" htmlFor="first_name" >First Name</label>
						<input
						id="first_name" type="text" name="first_name"
						/>
						<span className="red-text">
						{//this for errors
						}
						</span>
				</div>
				<div className="element">
					
					<label className="disP11" htmlFor="last_name">Last Name</label>
						<input
						id="last_name" type="text" name="last_name"
						/>
						<span className="red-text">
						{//this for errors
						}
						</span>
				</div>
				<div className="element">
					
					<label className="disP11" htmlFor="email">Email</label>
						<input
						id="register_email"
						name="email"
						/>
						<span className="red-text">
						{//this for errors
						}
						</span>
				</div>
				
				<div className="element">
					<label className="disP11" htmlFor="password">Password</label>
						<input
						id="password"
						type="password"
						name="password"
						/>
						<span className="red-text">
						{//this for errors
						}
						</span>
				</div>
				
				
				<div className="element tab">
					<label className="disP11" htmlFor="password">Password</label>
						<input
						id="password"
						type="password"
						name="password"
						/>
						<span className="red-text">
						{//this for errors
						}
						</span>
				</div>
				{/* comment this out until push */}
				{/* <div style={{"overflow":"auto"}}>
					<div style={{"float":"right"}}>
						<button className="logbut" type="button" id="prevBtn" onClick={nextPrev(-1)}>Previous</button>
						<button className="logbut" type="button" id="nextBtn" onClick={nextPrev(1)}>Next</button>
					</div>
				</div> */}
						
				{/*Circles which indicates the steps of the form: -->*/}
				<div style={{"textAlign":"center",":marginTop":"40px"}}>
					<span className="step"></span>
					<span className="step"></span>
					<span className="step"></span>
					<span className="step"></span>
				</div>

				{/* <div className="element">
					
					<label className="disP11" htmlFor="username">Username</label>
						<input
						id="username"  name="username"
						/>
						<span className="red-text">
						{//this for errors
						}
						</span>
				</div> */}
				<div className="col s12" style={{ textAlign: "center" }}>
					<button 
					id="register_button"
					type="submit"
					className="logbut"
					style={{marginBottom:"1rem"}}
					>
					Sign Up
					</button>
					
				</div>
			</form>
		)
	}
}
export default Register;