import React from 'react';
import chefi from '../images/chefex.png'
import flag from '../images/flag.png'
import like from '../images/like.png'
import share from '../images/share.png'
import Stars from './Stars';
import facebook from '../images/facebook.png';
import linkedin from '../images/linkedin.png';
import youtube from '../images/youtube.png';
import twiter from '../images/twiter.png';
import pintrest from '../images/pintrest.png';
import instagram from '../images/instagram.png'
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

const grid = false

const Cooker = (props) => (
    <div className="CookerCon">
             {grid ?
                <div>
                grid
                </div>
                :
                <div className="CookerCon1">
                    <img className="mainimg" src={props.img} alt="c"/>
                    <div className="sectors">
                    <div className="sect">
                        <div className="cooker_name">{props.name}</div>
                        <div style={{display: "inline-block",float: "right"}}> <img src={share} alt="s" style={{margin: "0 1rem"}}/><img src={like} alt="l"/></div>
                        <div style={{display: "flex",marginTop:"1rem"}}>
                            <div style={{display:"inline-block"}}><img src={flag} alt="f"/></div>
                            <div  className="cooker_dis"> {props.dis} km away </div>
                        </div>
                        <table className="cooker_table">
                            <tbody>
                                <tr>
                                    <td className="cooker_title">Age</td>
                                    <td className="cooker_detail">{props.age} yrs old</td>
                                </tr>
                                <tr>
                                    <td className="cooker_title">Gender</td>
                                    <td className="cooker_detail">{props.gender}</td>
                                </tr>
                                <tr>
                                    <td className="cooker_title">Cook or Chef</td>
                                    <td className="cooker_detail">{props.cookOrChef}</td>
                                </tr>
                                <tr>
                                    <td className="cooker_title">Experience</td>
                                    <td className="cooker_detail">{props.experience} years of experience</td>
                                </tr>
                                
                            </tbody>
                        </table>
                        {props.facebook ? <span><img src={facebook} alt="f"/></span> : undefined}
                        {props.linkedin ? <span><img src={linkedin} alt="f"/></span> : undefined}
                        {props.youtube ? <span><img src={youtube} alt="f"/></span> : undefined}
                        {props.twiter ? <span><img src={twiter} alt="f"/></span> : undefined}
                        {props.pintrest ? <span><img src={pintrest} alt="f"/></span> : undefined}
                    </div>
                    <div className="sect">
                        <div className="spec">About Me</div>
                        <p className="specP">{props.aboutMe}</p>
                        
                        <div className="spec">Specialty Foods</div>
                        <p className="specP">{props.specialtyFoods}</p>

                        <div className="spec">Specialty Cusines</div>
                        <p className="specP">{props.specialty}</p>

                        


                    </div>
                    <div className="sect">
                        <div className="spec">Days and Times Available</div>
                        <p className="specP text-center"> {props.availability} </p>
                        <p className="specP text-center">{props.times}</p>
                        {/* <div style={{textAlign:"center"}}>
                            {props.secure ? 
                            <span><img src={secure2} alt="f"/></span> :
                            <span><img src={secure1} alt="f"/></span>}
                            {props.email ? 
                                <span><img src={email2} alt="f"/></span> :
                            <span><img src={email1} alt="f"/></span>}
                            {props.details ? 
                                <span><img src={detail2} alt="f"/></span> :
                            <span><img src={detail1} alt="f"/></span>}
                            {props.phone ? 
                                <span><img src={phone2} alt="f"/></span> :
                            <span><img src={phone1} alt="f"/></span>}
                            {props.payment ? 
                                <span><img src={payment2} alt="f"/></span> :
                            <span><img src={payment1} alt="f"/></span>}
                        </div> */}
                        <div style={{textAlign: "center",marginTop: "2rem"}}>
                            <div className="spec">${props.price} <span className="specP">/hr</span></div>
                            <button className="bookbut">BOOK NOW</button>
                        </div>
                        <div>
                            <div className="cooker_title">
                                {props.rank} <Stars amount={props.stars} type={3}/>
                            </div>
                            <div className="reviewcook">{props.reviews} reviews</div>
                        </div>
                    </div>
                    </div>
                </div>
             }
         </div>
)
/*
class Cooker extends React.Component{
    constructor(props){
        super(props);
        this.state={
            ...props,
            isGrid:false
        }
    }
    componentDidMount() {
        console.log(this.state)
        let _this =this
        setTimeout(function(){
            console.log("aa")
            console.log(_this.state)
        },3000)
    }
    render(){
        console.log(this.state)
        return(
         <div className="CookerCon">
             {this.state.isGrid?
                <div>
                grid
                </div>
                :
                <div className="CookerCon1">
                    <img className="mainimg" src={this.state.img} alt="c"/>
                    <div className="sectors">
                    <div className="sect">
                        <div className="cooker_name">{this.state.name}</div>
                        <div style={{display: "inline-block",float: "right"}}> <img src={share} alt="s" style={{margin: "0 1rem"}}/><img src={like} alt="l"/></div>
                        <div style={{display: "flex",marginTop:"1rem"}}>
                            <div style={{display:"inline-block"}}><img src={flag} alt="f"/></div>
                            <div  className="cooker_dis"> {this.state.dis} km away </div>
                        </div>
                        <table className="cooker_table">
                            <tbody>
                                <tr>
                                    <td className="cooker_title">Age</td>
                                    <td className="cooker_detail">{this.state.age} yrs old</td>
                                </tr>
                                <tr>
                                    <td className="cooker_title">Gender</td>
                                    <td className="cooker_detail">{this.state.gender}</td>
                                </tr>
                                <tr>
                                    <td className="cooker_title">Experience</td>
                                    <td className="cooker_detail">{this.state.experience} years of experience</td>
                                </tr>
                            </tbody>
                        </table>
                        {this.state.facebook ? <span><img src={facebook} alt="f"/></span> : undefined}
                        {this.state.linkedin ? <span><img src={linkedin} alt="f"/></span> : undefined}
                        {this.state.youtube ? <span><img src={youtube} alt="f"/></span> : undefined}
                        {this.state.twiter ? <span><img src={twiter} alt="f"/></span> : undefined}
                        {this.state.pintrest ? <span><img src={pintrest} alt="f"/></span> : undefined}
                    </div>
                    <div className="sect">
                        <div className="spec">specialty</div>
                        <p className="specP">{this.state.specialty}</p>
                    </div>
                    <div className="sect">
                        <div style={{textAlign:"center"}}>
                            {this.state.secure ? 
                            <span><img src={secure2} alt="f"/></span> :
                            <span><img src={secure1} alt="f"/></span>}
                            {this.state.email ? 
                                <span><img src={email2} alt="f"/></span> :
                            <span><img src={email1} alt="f"/></span>}
                            {this.state.details ? 
                                <span><img src={detail2} alt="f"/></span> :
                            <span><img src={detail1} alt="f"/></span>}
                            {this.state.phone ? 
                                <span><img src={phone2} alt="f"/></span> :
                            <span><img src={phone1} alt="f"/></span>}
                            {this.state.payment ? 
                                <span><img src={payment2} alt="f"/></span> :
                            <span><img src={payment1} alt="f"/></span>}
                        </div>
                        <div style={{textAlign: "center",marginTop: "2rem"}}>
                            <div className="spec">${this.state.price} <span className="specP">/hr</span></div>
                            <button className="bookbut">BOOK NOW</button>
                        </div>
                        <div>
                            <div className="cooker_title">
                                {this.state.rank} <Stars amount={this.state.stars} type={3}/>
                            </div>
                            <div className="reviewcook">{this.state.reviews} reviews</div>
                        </div>
                    </div>
                    </div>
                </div>
             }
         </div>
        )
    }
}
*/
export default Cooker;