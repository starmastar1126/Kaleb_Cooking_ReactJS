import React from 'react';
import Stars from './Stars';
import secure1 from '../images/secure1.png';
import secure2 from '../images/secure2.png';
import email1 from '../images/mail1.png';
import email2 from '../images/mail2.png';
import detail1 from '../images/detail1.png';
import detail2 from '../images/detail2.png';
import phone1 from '../images/phone1.png';
import phone2 from '../images/phone2.png';
import payment1 from '../images/payment1.png';
import payment2 from '../images/payment2.png';
import chefi2 from '../images/chefi2.png';
import cheff from '../images/c1.png';
import recipieImage from '../images/recipe.png';
import review from '../images/review.png';
import response from '../images/response.png'
import checke from '../images/checke.png';
import checkf from '../images/checkf.png';

import $ from 'jquery'

//font awesome
import '../_CookProfile.css';
import { ajaxCall } from './common';

const secure = true;
const payment = true;
const phone = true;
const details = true;
const email = true;

let specialties = ["+","Pudding","Beef Skewers","Ice Cream","Pinot Grigio","French Toast","Basked Salmon"];
let cusines = [' ','Italian', 'French', 'Mediteranian']
const languages = ["English","Mandarin","Spanish","Dutch"];
const workedIn = ["New Zealand","Australia","Chine","Brazil","Mexico","Switzerland"];

const local_url = 'http://localhost:5000/'
const bookyourcook_url = 'http://bookyourcook.co/'

class Checkbox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Opt1:false,
            Opt2:true,
            txt1:props.txt1,
            txt2:props.txt2,
            
        }
        
    }
    componentDidMount(){
    }
    handleChange(t){
        switch(t){
            case 1:
                this.setState({
                    ...this.state,
                    Opt1:true,
                    Opt2:false
                })
                break;
            case 2:
                this.setState({
                    ...this.state,
                    Opt1:false,
                    Opt2:true
                })
                break;
        }
    }

    
    render(){
        return(
            <div className="checkbox">
                <div style={{display:"inline-block"}}>
                    <div className="checkPart" onClick={()=>this.handleChange(1)}>
                        <img src={this.state.Opt1 ? checkf:checke } alt="a"/>
                        <div className="checkTxt">{this.state.txt1}</div>
                    </div>
                </div> 
                <div style={{display:"inline-block"}}>
                    <div className="checkPart" onClick={()=>this.handleChange(2)}>
                        <img src={this.state.Opt2 ? checkf:checke } alt="a"/>
                        <div className="checkTxt">{this.state.txt2}</div>
                    </div>
                </div>    
            </div>
        )
    }
}
const Rep = () => (
    <div className="relatedP">
        <img className="imgRe" src={recipieImage} alt="a"/>
        <div className="relatitle">LOREM LIPSUM CONSECTETUR</div>
    </div>
)
const Review = (props) => (
    <div className="rr">
        <div className="r1">
            <img src={review} alt="a"/>
        </div>
        <div  className="r2" style={{  paddingTop:".7rem"}}>
            <div className="reviewName">{props.name}</div>
            <div className="reviewDate">{props.date}</div>
        </div>
        <div className="textPoo">
            <p>Phasellus scelerisque vulputate dolor, finibus tincidunt lorem feugiat quis. Phasellus porta tempor nisl, vitae rutrum diam. Proin gravida nisl et felis euismod blandit vitae ut nulla. </p>
        </div>
    </div>
)
const Response = (props) => (
    <div className="rr1">
        <div className="r1">
            <img src={response} alt="a"/>
        </div>
        <div  className="r2">
            <div className="responseName">Response from {props.name}</div>
            <div className="responseDate">{props.date}</div>
        </div>
        <div className="textPoo">
            <p>Phasellus scelerisque vulputate dolor, finibus tincidunt lorem feugiat quis. Phasellus porta tempor nisl, vitae rutrum diam. Proin gravida nisl et felis euismod blandit vitae ut nulla. </p>
        </div>
    </div>
)

const Llabel = (props) => (
    <div className="inp">
        {props.txt}
    </div>
)
class CookerProfile extends React.Component{
    constructor(props){
        super(props);
        this.state={
            ...props,
            isGrid:false,
            firstName: 'Jane',
            lastName: 'Smith'
        }
        this.getUser = this.getUser.bind(this);
    }
    componentDidMount() {
        this.getUser()
    }
    getUser(){
        const thisState = this;
        let email = localStorage.getItem("login_email")
        console.log("email: ",email)
        console.log("getting user...")
        const requestArgs = {
            email: email
        }
        ajaxCall('update-profile', requestArgs, function(response){
            response = JSON.parse(response)
            // console.log("update-profile response: ",JSON.parse(response))
            console.log("response[first_name]: ", response['first_name'])
            thisState.setState({
                firstName: response['first_name'],
                lastName: response['last_name']
            })
        }, 'GET')

        
        
        
    }
    render(){
        return(
            <div >
            <div className="profileHeM">
                <div className="Header1">
                    <div className="HeaderP">
                        <div className="profileDe">
                            <img className="imgP" src={chefi2} alt="s"/>
                            <div className="nameP">{this.state.firstName} {this.state.lastName}</div>
                            <div style={{}}>
                                <div className="rankP">4.9 </div>
                                <Stars amount={5} type={2}/>
                            </div>
                        </div>
                        <div className="buttonP">
                            <div className="actbutP">ABOUT ME</div>
                            <div className="actbutP">RECIPES</div>
                            <div className="actbutP">REVIEWS</div>
                            <button className="hireme">BOOK ME</button>
                        </div>
                    </div>                
                </div>
                <div className="backgrounP1">
    
                </div>
                <div className="restP">
                    <div className="restPP">
                        <img className="mimgp" src={cheff} alt="a"/>
                        <div className="Pcont">
                            <div className="nameP1 text-left">{this.state.firstName} {this.state.lastName}</div>
                            <div style={{display:"inline-block",float:"left"}}>
                                <div className="rankP1">4.9 </div>
                                <Stars amount={5} type={2}/>
                            </div> 
                            <div className="priceP"> $20 <span className="pricePc">USD / hr</span></div>
                        </div>
                        <div className="Pcont1">
                            <div className="disP1">0.5 km away</div>
                            <button className="butP">ONLINE</button>
                            <div className="iconsP">
                                    {secure ? 
                                    <span><img src={secure2} alt="f"/></span> :
                                    <span><img src={secure1} alt="f"/></span>}
                                    {email ? 
                                        <span><img src={email2} alt="f"/></span> :
                                    <span><img src={email1} alt="f"/></span>}
                                    {details ? 
                                        <span><img src={detail2} alt="f"/></span> :
                                    <span><img src={detail1} alt="f"/></span>}
                                    {phone ? 
                                        <span><img src={phone2} alt="f"/></span> :
                                    <span><img src={phone1} alt="f"/></span>}
                                    {payment ? 
                                        <span><img src={payment2} alt="f"/></span> :
                                    <span><img src={payment1} alt="f"/></span>}
                                </div>
                        </div>
                    </div>
                    <div className="restPP">
                        <div className="nextP">SPECIALTY FOODS</div>
                        <div className="inpC">{specialties.map(n=> <Llabel txt={n}/>)}</div>
                        <div className="nextP">SPECIALTY CUSINES</div>
                        <div  className="inpC">{cusines.map(n=> <Llabel txt={n}/>)}</div>
                        {/* <div className="nextP">WORKED IN</div>
                        <div  className="inpC">{workedIn.map(n=> <Llabel txt={n}/>)}</div> */}
                    </div>
                    <div  className="restPP" >
                        <div className="nextP1">ABOUT ME <i className="edit-icon fas fa-edit "></i></div>
                        <p className="Ppar" contenteditable="true">Growing food, cooking food and sharing food defines my daily life. 
                        I am a food professional and make my living with my organic fair trade food company. 
                        Food consumes me just as much as I consume it. Upon moving to our farm in the Cowichan Valley I have found my food mecca.</p>
                        <p className="Ppar" contenteditable="true">
                        Anything I don't make is here for me. 
                        Welcome to my slice of heaven.</p>
                    </div>
                    <div className="restPP">
                        <div  className="nextP1">BEST RECIPES</div>
                        <div style={{display:"flex",justifyContent:"space-between",marginTop:"2rem"}}>
                            <Rep/>
                            <Rep/>
                            <Rep/>
                            <Rep/>
                        </div>
                    </div>
                    <div  className="restPP">
                        <div className="nextP1">REVIEWS</div>
                        <ul style={{columns:"2"}}>
                            <li className="liRev">
                                <div className="titleRev">Communication</div>
                                <Stars amount={5} type={2}/>
                                <div className="rankRev"> (5.0 Rating)</div>
                            </li>
                            <li className="liRev">
                                <div  className="titleRev">Preparation</div>
                                <Stars amount={5} type={2}/>
                                <div className="rankRev"> (5.0 Rating)</div>
                            </li>
                            <li className="liRev">
                                <div  className="titleRev">Food</div>
                                <Stars amount={5} type={2}/>
                                <div className="rankRev"> (5.0 Rating)</div>
                            </li>
                            <li className="liRev">
                                <div  className="titleRev">Service</div>
                                <Stars amount={5} type={2}/>
                                <div className="rankRev"> (5.0 Rating)</div>
                            </li>
                            <li className="liRev">
                                <div  className="titleRev">Value</div>
                                <Stars amount={5} type={2}/>
                                <div className="rankRev"> (5.0 Rating)</div>
                            </li>
                        </ul>
                    </div>
                    <div className="restPP" style={{marginTop:"2rem"}}>
                        <Review name={"Mitch S"} date={"May 2019"}/>
                        <Response name={"John"} date={"June 2019"}/>
                    </div>
                    <div className="restPP">
                        <div className="restPP1">
                            <div style={{width:"47rem",margin:"auto"}}>            
                                <h2 className="formPTitle">Contact Jane About her Work Opportunity</h2>
                                <input className="forminpu" type="text" placeholder="Messages"></input>
                                <div style={{float:"left"}}>
                                    <div className="formHire">Hire for</div>
                                    <Checkbox txt1={"Fixed Price"} txt2={"Hourly Rate"}/>
                                </div>
                                <div className="formRest">
                                    <select className="pa1"> 
                                        <option>$</option>
                                    </select>
                                    <input type="text" className="pa2" placeholder="200"></input>
                                    <input className="pa3" type="text" placeholder="AED"></input>
                                </div>
                                <button className="lastbut">HIRE ME!</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="baclgroundP2">
    
                </div>
               
            </div>
    
        </div>
    
        )
    }
}


export default CookerProfile;