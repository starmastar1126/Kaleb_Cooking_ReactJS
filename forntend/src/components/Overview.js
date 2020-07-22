import se from '../images/se.png';
import { Slide } from 'react-slideshow-image';
import React from 'react';
import Pag from './RecipePaginat'
import {Recipe1} from './Recipe';
import Header from './Header';







const slideImages = [
    <Recipe1/>,
    <Recipe1/>,
    <Recipe1/>,
    <Recipe1/>
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





class Overview extends React.Component {


    componentDidMount(){
        window.scrollTo(0, 0)

    }
    render(){
        return(

            <div>
            <Header/>
            <div className="backgroundm" style={{}}>
                <div className="middle_con">
                    <div className="second_con">
                    <div className="fetureH1">
                      SEARCH <span className="nextH">RECIPES </span>
                    </div>
                    <div className="containerS">
                        <div className="dropdowns">
                            <input className="searchbox" type="text" placeholder="Type keyword here"></input>
                        </div>
                        <div className="bb" style={{display:'inline-block'}}>
                            <button className="sebut1"><img src={se} alt="s" style={{padding: "9px"}}/></button>
                        </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    <div className="mainCo">
                        <div className="container">
                        {window.innerWidth > 800 ? 

                    <Pag/>
                    :
                    <div className="slide-container">
                        <Slide {...properties}>
                        <div className="each-slide">
                            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                            <Recipe1/>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                            <Recipe1/>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                            <Recipe1/>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                            <Recipe1/>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                            <Recipe1/>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                            <Recipe1/>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                            <Recipe1/>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                            <Recipe1/>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                            <Recipe1/>
                            </div>
                        </div>

                        </Slide>
                    </div>
       
                }

                        </div>
                    </div>
            
        </div>
        )
    }

}

export default Overview;

/*<select style={{borderRadius:" 27px 0 0 27px"}}>
                                <option>In my pantry</option>
                            </select>
                            <select>
                                <option>Time</option>
                            </select>
                            <select>
                                <option>Diet</option>
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
                            </select>*/
