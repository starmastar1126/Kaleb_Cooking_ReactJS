import React from 'react'
import share from '../images/share.png';
import like from '../images/like.png'
import recipe from '../images/recipe.png';
import Stars from './Stars'
import { NavLink} from 'react-router-dom';

export const Recipe = (props) => (
    <div className="chefCo">
    <img src={recipe} alt="photog" style={{maxWidth:"280px"}}/>
    <button className="quick" >Quick View</button>
    <div style={{padding:"1rem",textAlign: "left"}}>
        <div className="cName">RED SNAPPER ARTARE</div>
        <div >
            <Stars type={2} amount={props.amount}/>
            <div className="cDisa">(5.0 Rating)</div>
        </div>
        <div className="star">
            <img src={share} alt="share" />
            <img src={like} alt="like" style={{marginLeft:"1rem"}}/>
            <button className="recipeBU">ADD TO LIST</button>
        </div>
    </div>
</div>
)

export const Recipe1 = (props) => (
    <div className="chefCo1" >
    <NavLink to={"/recipepage/"+props.id}>
    <img src={recipe} alt="photof" style={window.innerWidth>800?{maxWidth:"350px"}:{maxWidth:"280px"}}/>
    <button className="quick" >Quick View</button>
    <div style={{padding:"1rem",textAlign: "left"}}>
        <div className="cName">RED SNAPPER ARTARE</div>
        <div >
            <Stars type={2} amount={props.amount}/>
            <div className="cDisa">(5.0 Rating)</div>
        </div>
        <div className="star">
            <img src={share} alt="share" />
            <img src={like} alt="like" style={{marginLeft:"1rem"}}/>
            <button className="recipeBU">ADD TO LIST</button>
        </div>
    </div>
    </NavLink>
</div>
)