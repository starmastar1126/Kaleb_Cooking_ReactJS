
import React from 'react'
import stars0 from '../images/0stars.png';
import stars1 from '../images/1stars.png';
import stars2 from '../images/2stars.png';
import stars3 from '../images/3stars.png';
import stars4 from '../images/4stars.png';
import stars5 from '../images/5stars.png';
import stars0g from '../images/0starsg.png';
import stars1g from '../images/1starsg.png';
import stars2g from '../images/2starsg.png';
import stars3g from '../images/3starsg.png';
import stars4g from '../images/4starsg.png';
import stars5g from '../images/5starsg.png';


const Stars = (props) => {
    switch(props.type){
    case 1 :
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
    case 2:
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
    case 3 :
            switch(props.amount){
                case 0:
                    return <img src={stars0} alt="0" style={{float:"right",paddingLeft:"5px"}}/>
                case 1:
                    return <img src={stars1} alt="1" style={{float:"right",paddingLeft:"5px"}}/>
                case 2:
                    return <img src={stars2} alt="2" style={{float:"right",paddingLeft:"5px"}}/>
                case 3:
                    return <img src={stars3} alt="3" style={{float:"right",paddingLeft:"5px"}}/>
                case 4:
                    return <img src={stars4} alt="4" style={{float:"right",paddingLeft:"5px"}}/>
                case 5:
                    return <img src={stars5} alt="5" style={{float:"right",paddingLeft:"5px"}}/>
                default:
                    return<img src={stars0} alt="0" style={{float:"right",paddingLeft:"5px"}}/>
            }
    case 4 :
            switch(props.amount){
                case 0:
                    return <img src={stars0g} alt="0" style={{float:"left",paddingTop:"2px"}}/>
                case 1:
                    return <img src={stars1g} alt="1" style={{float:"left",paddingTop:"2px"}}/>
                case 2:
                    return <img src={stars2g} alt="2" style={{float:"left",paddingTop:"2px"}}/>
                case 3:
                    return <img src={stars3g} alt="3" style={{float:"left",paddingTop:"2px"}}/>
                case 4:
                    return <img src={stars4g} alt="4" style={{float:"left",paddingTop:"2px"}}/>
                case 5:
                    return <img src={stars5g} alt="5" style={{float:"left",paddingTop:"2px"}}/>
                default:
                    return<img src={stars0g} alt="0" style={{float:"left",paddingTop:"2px"}}/>
            }
    }
}

export default Stars;
