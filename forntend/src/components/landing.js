import React from 'react';
import $ from 'jquery';
//components
// import Modal from './Modal.js'
import {ajaxCall} from './common.js'
import Registration from '../helpers/Register.js'
//npm libraries
import ReactModal from 'react-modal';

//images
import Background from '../images/back.png';
import se from '../images/se.png';
import s1 from '../images/step1.png';
import s2 from '../images/step2.png';
import s3 from '../images/step3.png';
import s4 from '../images/step4.png';
import chef from '../images/chefex.png';
import flag from '../images/flag.png';
import {Recipe} from './Recipe'
import share from '../images/share.png';
import like from '../images/like.png'
import { Slide } from 'react-slideshow-image';
import { NavLink} from 'react-router-dom';
import Stars from './Stars'
import Modal from 'react-modal';
import { isLogicalExpression } from '@babel/types';
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    background            : "#F3F3F3",
    zIndex                : '15'
  }
};

const local_url = 'http://localhost:5000/'
const bookyourcook_url = 'http://bookyourcook.co/'
const cur_ip = window.location
// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')
let currentTab = 0;
 // Current tab is set to be the first tab (0)
// showTab(currentTab); // Display the current tab
 
const moveIt =(t) => {
    var ab = document.getElementById("chefs").style.left;
    console.log(ab)
    ab = ab.replace("px","")
    console.log(ab)
    ab = parseInt(ab)
    if(t===1){
        console.log("on")
        ab = ab + 340
        ab = ab + "px"
        document.getElementById("chefs").style.left = ab
    }else{
        ab = ab - 340
        ab = ab + "px"
        document.getElementById("chefs").style.left = ab
    }
}
const moveItt =(t) => {
    var ab = document.getElementById("recipes").style.left;
    console.log(ab)
    ab = ab.replace("px","")
    console.log(ab)
    ab = parseInt(ab)
    if(t===1){
        console.log("on")
        ab = ab + 340
        ab = ab + "px"
        document.getElementById("recipes").style.left = ab
    }else{
        ab = ab - 340
        ab = ab + "px"
        document.getElementById("recipes").style.left = ab
    }
}

const Chef = (props) => (
    <div className="chefCo">
        <img src={chef} alt="photog"/>
        <div style={{padding:"1rem"}}>
            <div className="cName">Mark WAHL</div>
            <div className="cAge">23 yrs old</div>
            <div >
                <img src={flag} alt="country"/>
                <div className="cDis">0.5 km away</div>
                <Stars type={1} key={0} amount={props.amount}/>
            </div>
            <div className="cExp">10 years of experience</div>
            <div className="stars">
                <img src={share} alt="share" style={{marginLeft:"1rem"}}/>
                <img src={like} alt="like" style={{marginLeft:"1rem"}}/>
            </div>
        </div>
    </div>
)




  
  const slideImages = [
    <Chef amount={2}/>,
    <Chef amount={5}/>,
    <Chef/>,
    <Chef/>
  ]; 

  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    onChange: (oldIndex, newIndex) => {
      console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
  }

class Landing extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          modalIsOpen: false,
          islogin:false,
          type:undefined
        };
     
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.setStyle = this.setStyle.bind(this);
        // this.register = this.register.bind(this);
        this.login = this.login.bind(this);
      }
      componentDidMount(){
        }
      openModal() {
        this.setState({modalIsOpen: true});
      }
      
      setStyle(a){
          switch(a){
              case 1 :
                  this.setState({
                      ...this.state,
                      islogin:true,
                      modalIsOpen:true
                  })
                  break;
                case 2 :
                    this.setState({
                        ...this.state,
                        islogin:false,
                        modalIsOpen:true
                    })
                    break;
          }
      }
    
     

     login = (e) =>{    
        e.preventDefault();
         console.log("test login")
         let request_args = $('#login_form').serialize();
         ajaxCall('login', request_args, function(response){
            console.log("register response: ",response)
            console.log("response['email']: ", response['email'])
            localStorage.setItem("login_email",response['email'])
            window.location.replace("/cookprofile")
        }, 'POST')
     }
      closeModal() {
        this.setState({modalIsOpen: false});
      }
      registerCallback = (modalState) => {
        this.setState({
            modalIsOpen: modalState
        })
      }
    
        render(){
            return  (
                <div className="landing" >
                    <div className="headerL" style={{backgroundImage:'url('+Background+")"}}>
                       <div className="header_top">
                            <div  className="logo" style={{fontFamily:'Montserrat'}}> 
                                LOGO
                            </div>
                            <div className="bottoms">
                                <div className="actbut" style={{cursor:"pointer"}} onClick={()=>this.setStyle(1)}>
                                    LOG IN
                                </div>
                                <div  className="actbut" style={{cursor:"pointer"}} onClick={()=>this.setStyle(2)}>
                                    REGISTER
                                </div>
                            </div>
                        </div>
                        <div className="header_middle" >
                                <div className="h1e">
                                    SEARCH FOR THE LATEST <span className="nextH">COOKS</span> NEAR YOU
                                </div>
                            <div className="containerS text-center">
                                <div className="row ">
                                        {/* <input className="searchbox" type="text" placeholder="Type keyword here"></input> */}
                                        <div className="col text-right ml-5">
                                        <NavLink to="/overviewcook" exact={true}><button type="button" className="btn  btn-rounded btn-warning login-buttons">Search Cooks</button></NavLink>
                                        </div>
                                        <div className="col text-left">
                                        <NavLink to="/cookprofile" exact={true}><button type="button" className="btn  btn-rounded btn-success pl-3 pr-3 login-buttons">I'm a cook</button></NavLink>
                                        </div>
                                </div>
                                {/* <div className="dropdowns">
                                 <div style={{display:'inline-block',float:"left"}}>
                                    <NavLink to="/overview" exact={true}>
                                    <button className="sebut"><img src={se} alt="s" style={{padding: "9px"}}/></button></NavLink>
                                </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="header_icons">
                            <div className="iconsCont">
                                <div className="iconC">
                                    <div className="iconi">
                                        <img src={s1} alt="1" style={{padding:"20px"}} />
                                    </div>
                                    <div  className="steper">STEP 1</div>
                                    <div className="par">Search a Recipe</div>
                                </div>
                                <div  className="iconC">
                                    <div className="iconi">
                                        <img src={s2} alt="1" style={{padding:"23px"}} />
                                    </div>
                                    <div  className="steper">STEP 2</div>
                                    <div className="par">Add to your List</div>
                                </div>
                                <div  className="iconC">
                                    <div className="iconi">
                                        <img src={s3} alt="1" style={{padding:"20px"}} />
                                    </div>
                                    <div className="steper">STEP 3</div>
                                    <div className="par">Find a cook to prepare</div>
                                </div>
                                <div  className="iconC">
                                    <div className="iconi">
                                        <img src={s4} alt="1" style={{padding:"20px"}} />
                                    </div>
                                    <div  className="steper">STEP 4</div>
                                    <div className="par">Indulge and Enjoy</div>
                                </div>
                            </div>
                        </div>
                        <div className="header_bottom">
                        </div>
                    <div className="middle">
                        <div className="middle_top">
                            <div className="fetureH">
                                FEATURED <span className="nextH">COOKS</span>
                            </div>
                            <div className="fetureI">
                                <input type="text" className="searchi" placeholder="Search"></input>
                            </div>
                        </div>
                        <div className="middle_middle">
                            
                            {window.innerWidth > 800 ? 
                                <div>
                                
                                    <div className="chefs" id="chefs" style={{left:0}}>
                                        <Chef amount={2}  />
                                        <Chef amount={5}/>
                                        <Chef  amount={3}/>
                                        <Chef  amount={1}/>
                                        <Chef amount={2}/>
                                        <Chef amount={5}/>
                                        <Chef  amount={3}/>
                                        <Chef  amount={1}/>
                                    </div>
                                    <div style={{width:"100%",textAlign:"center",marginTop:"1rem"}}>
                                        <button className="moving"  onClick={()=>moveIt(2)}>{"<"}</button>
                                        <button  className="moving" onClick={()=>moveIt(1)}>></button>
                                    </div>
                                    
                                </div>
                                :
                                <div className="slide-container">
                                    <Slide {...properties}>
                                    <div className="each-slide">
                                        <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                                        <Chef/>
                                        </div>
                                    </div>
                                    <div className="each-slide">
                                        <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                                        <Chef/>
                                        </div>
                                    </div>
                                    <div className="each-slide">
                                        <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                                        <Chef/>
                                        </div>
                                    </div>
                                    </Slide>
                                </div>
                   
                            }
                            
                        </div>
                    </div>
                    <div className="next_sect">
                        <div className="backgroundi">
                            <div style={{display:"inline-block"}}>
                                <div className="bigH">GET TO KNOW ABOUT THE LATEST RECIPES</div>
                                <div className="bigP">We want to ensure your health is our priority, together with good exercise we provide the best nutrition and supplements in the market</div>
                            </div>
                            <div className="butCo" >
                                <button className="But">VISIT NOW</button>
                            </div>
                        </div>
                    </div>
                    <div className="middle">
                        <div className="middle_top">
                            <div className="fetureH">
                                MOST SEARCHED <span className="nextH">RECIPES</span>
                            </div>
                            <div className="fetureI">
                                <input type="text" className="searchi" placeholder="Search"></input>
                            </div>
                            
                        </div>
                        <div className="middle_middle">
                        {window.innerWidth > 800 ? 
                            <div>
                            <div className="chefs" id="recipes"  style={{left:0}}>
                                <Recipe amount={5}/>
                                <Recipe amount={1}/>
                                <Recipe amount={3}/>
                                <Recipe amount={5}/>
                                <Recipe amount={1}/>
                                <Recipe amount={3}/>
                            </div>
                            <div style={{width:"100%",textAlign:"center",marginTop:"1rem"}}>
                                        <button className="moving"  onClick={()=>moveItt(2)}>{"<"}</button>
                                        <button  className="moving" onClick={()=>moveItt(1)}>></button>
                                    </div>
                            </div>
                            :
                            <div className="slide-container">
                                    <Slide {...properties}>
                                    <div className="each-slide">
                                        <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                                        <Recipe/>
                                        </div>
                                    </div>
                                    <div className="each-slide">
                                        <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                                        <Recipe/>
                                        </div>
                                    </div>
                                    <div className="each-slide">
                                        <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                                        <Recipe/>
                                        </div>
                                    </div>
                                    </Slide>
                                </div>
                        }
                        </div>
                    </div>
                    <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                    >  
                    {this.state.islogin?
            <form noValidate id="login_form" onSubmit={(e)=>this.login(e)} className="log_form" >
                <h2 className="nameP1" style={{textAlign:"center"}} >Welcome Back</h2>
                <div className="element">
                    
                    <label className="disP11" htmlFor="email">Email</label>
                        <input
                        id="login_email"
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
                        name="password"
                        type="password"
                        />
                        <span className="red-text">
                        {//this for errors
                        }
                        </span>
                </div>
                <div className="col s12" style={{ textAlign: "center" }}>
                    <button 
                    
                    type="submit"
                    className="logbut"
                    style={{marginBottom:"1rem"}}
                    >
                    Log In
                    </button>
                    <div className="Ppar1"  onClick={()=>this.setStyle(2)}>Dont have an account? Sign Up</div>
                </div>
            </form>
                        :
                        /* Registration */
                <Registration closeModal={this.registerCallback}/>
                        }
                </Modal>
                </div>
            )  
        }  
}

export default Landing;