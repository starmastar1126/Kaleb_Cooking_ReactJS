import React from 'react';
import Background from './images/back.png';
import se from './images/se.png';
import s1 from './images/step1.png';
import s2 from './images/step2.png';
import s3 from './images/step3.png';
import s4 from './images/step4.png';
import chef from './images/chefex.png';
import stars from './images/stars.png';
import stars0 from './images/0stars.png';
import stars1 from './images/1stars.png';
import stars2 from './images/2stars.png';
import stars3 from './images/3stars.png';
import stars4 from './images/4stars.png';
import stars5 from './images/5stars.png';
import flag from './images/flag.png';
import share from './images/share.png';
import like from './images/like.png'
import recipe from './images/recipe.png';
import Footer from './Footer'
import { Slide } from 'react-slideshow-image';

const Stars = (props) => {
    if(props.type==1){
        switch(props.amount){
            case 0:
                return <img src={stars0} alt="0" style={{float:"right",paddingTop:"10px"}}/>
            case 1:
                return <img src={stars1} alt="1" style={{float:"right",paddingTop:"10px"}}/>
            case 2:
                return <img src={stars2} alt="2" style={{float:"right",paddingTop:"10px"}}/>
            case 3:
                return <img src={stars3} alt="3" style={{float:"right",paddingTop:"10px"}}/>
            case 4:
                return <img src={stars4} alt="4" style={{float:"right",paddingTop:"10px"}}/>
            case 5:
                return <img src={stars5} alt="5" style={{float:"right",paddingTop:"10px"}}/>
            default:
                return<img src={stars0} alt="0" style={{float:"right",paddingTop:"10px"}}/>
        }
    }
    else{
        switch(props.amount){
            case 0:
                return <img src={stars0} alt="0" style={{float:"left",paddingTop:"5px"}}/>
            case 1:
                return <img src={stars1} alt="1" style={{float:"left",paddingTop:"5px"}}/>
            case 2:
                return <img src={stars2} alt="2" style={{float:"left",paddingTop:"5px"}}/>
            case 3:
                return <img src={stars3} alt="3" style={{float:"left",paddingTop:"5px"}}/>
            case 4:
                return <img src={stars4} alt="4" style={{float:"left",paddingTop:"5px"}}/>
            case 5:
                return <img src={stars5} alt="5" style={{float:"left",paddingTop:"5px"}}/>
            default:
                return<img src={stars0} alt="0" style={{float:"left",paddingTop:"5px"}}/>
        }
    }
}

const Chef = (props) => (
    <div className="chefCo">
        <img src={chef} alt="photo"/>
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

const Recipe = (props) => (
    <div className="chefCo">
    <img src={recipe} alt="photo"/>
    <button className="quick" >Quick View</button>
    <div style={{padding:"1rem"}}>
        <div className="cName">RED SNAPPER ARTARE</div>
        <div >
            <Stars type={2} amount={props.amount}/>
            <span className="cDisa">(5.0 Rating)</span>
        </div>
        <div className="star">
            <img src={share} alt="share" />
            <img src={like} alt="like" style={{marginLeft:"1rem"}}/>
            <button className="recipeBU">ADD TO LIST</button>
        </div>
    </div>
</div>
)

var sectionStyle = {
    backgroundImage: "url(" + { Background } + ")"
  };
  
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

const landing = () => (
    <div className="landing" >
        <div className="headerL" style={{backgroundImage:'url('+Background+")"}}>
           <div className="header_top">
                <div  className="logo" style={{fontFamily:'Montserrat'}}> 
                    LOGO
                </div>
                <div className="bottoms">
                    <div className="actbut">
                        LOG IN
                    </div>
                    <div  className="actbut">
                        REGISTER
                    </div>
                </div>
            </div>
            <div className="header_middle" >
                    <div className="h1e">
                        SEARCH FOR THE LATEST <span className="nextH">RECIPES & COOKS</span> NEAR YOU
                    </div>
                <div className="containerS">
                    <div className="dropdowns">
                        <select style={{borderRadius:" 27px 0 0 27px"}}>
                            <option>In my pantry</option>
                        </select>
                        <select>
                            <option>Time</option>
                            <option> &lt; 15  min</option>
                            <option> &lt; 30  min</option>
                            <option> &lt; 45  min</option>
                            <option> &lt; 1 hour</option>
                            <option> &lt; 2 hours</option>
                        </select>
                        <select>
                            <option>Diet</option>
                            <option>Keto</option>
                            <option>Paleo</option>
                            <option>Low Carb</option>
                            <option>Vegetarian</option>
                            <option>Vegan</option>
                        </select>
                        <select>
                            <option>Calories</option>
                        </select>
                        <select>
                            <option>Cuisine</option>
                        </select>
                        <select>
                            <option>Courses</option>
                        </select>
                        <select  style={{borderRadius:"0 27px 27px 0"}}>
                            <option>Ingredient Count</option>
                        </select>
                    </div>
                    <div style={{display:'inline-block',float:"right"}}>
                        <button className="sebut"><img src={se} style={{padding: "9px"}}/></button>
                    </div>
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
                    <div className="chefs">
                        <Chef amount={2}/>
                        <Chef amount={5}/>
                        <Chef  amount={3}/>
                        <Chef  amount={1}/>
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
                <div className="chefs">
                    <Recipe amount={5}/>
                    <Recipe amount={1}/>
                    <Recipe amount={3}/>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
)

export default landing;