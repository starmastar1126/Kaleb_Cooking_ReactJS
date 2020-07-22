import React from 'react'
import recipe from '../images/recipe.png';
import Header from './Header';
import prep from '../images/prep.png'
import chefi from '../images/chefi.png'
import Stars from './Stars';
import { NavLink} from 'react-router-dom';

const Direction = (props) => (
    <div className="dir">
        <div className="ini">{props.num}</div>
        <p className="parDir">{props.text}</p>
    </div>
)

const directions = [
    {num:1,text:"In a large bowl, mix together the ground beef, egg, bread crumbs, pepper, salt, onion powder, garlic powder, and Worcestershire sauce. Form into 8 balls, and flatten into patties. Watch Now"},
    {num:2,text:"Heat the oil in a large skillet over medium heat. Fry the patties and onion in the oil until patties are nicely browned, about 4 minutes per side. Remove the beef patties to a plate, and keep warm. Watch Now    "},
    {num:3,text:"Sprinkle flour over the onions and drippings in the skillet. Stir in flour with a fork, scraping bits of beef off of the bottom as you stir. Gradually mix in the beef broth and sherry. Season with seasoned salt. Simmer and stir over medium-low heat for about 5 minutes, until the gravy thickens. Turn heat to low, return patties to the gravy, cover, and simmer for another 15 minutes. Watch Now"},
]

const Ingredients = ["1 pond ground beef","1 pond ground beef","1 pond ground beef","1 egg","1/4 cup bread crumbs","1/8 teaspoon ground black pepper","1 pound ground beef","1 egg"]
const recipess = [{
    url:'',
    name:'Salisbury Steak',
    stars:5,
    review:'3K'
},{
    url:'',
    name:'Salisbury Steak',
    stars:4,
    review:'589'
},{
    url:'',
    name:'Salisbury',
    stars:2,
    review:'60'
},{
    url:'',
    name:'Salisbury',
    stars:1,
    review:'54'
},{
    url:'',
    name:'Salisbury',
    stars:3,
    review:'11'
},{
    url:'',
    name:'Salisbury',
    stars:0,
    review:'154'
}]



const chefs = [{
url:'../images/chefi.png',
name:'JANE SMITH',
stars:5,
rank:'4.9',
price:'20',
dis:'0.25'
},{
    url:'',
    name:'av',
    stars:'',
    rank:'',
    price:'',
    dis:''
},{
    url:'',
    name:'',
    stars:'',
    rank:'',
    price:'',
    dis:''
},{
    url:'',
    name:'',
    stars:'',
    rank:'',
    price:'',
    dis:''
}
]

const Ingri = (props) => (
    <li className="lii">{props.name}</li>
)

const Cheff =(props) =>
    (
    <NavLink to="/overviewcook"> >
        <div className="cheffCO">
            <img alt="chefi" style={{borderRadius:"15px"}} src={chefi}></img>
            <div className="col1">
                <div className="chefna">{props.name}</div>
                <div className="stars">{props.rank} <Stars  type={3} amount={props.stars}/></div>
                <div className="price">${props.price} <span className="currency">USD / hr</span></div>
            </div>
            <div className="col1">
                <div className="chdis">{props.dis}</div>
                <div className="chdis2">miles away</div>
                <button className="hire">HIRE NOW!</button>
            </div>
        </div>
    </NavLink>
)
    


const Recipee = (props) => (
    <div className="rere">
        <img className="rereimg" src={recipe}></img>
        <img></img>
        <div className="rerename">{props.name}</div>
        <div className="rerestars"><Stars type={2} amount={props.stars}/></div>
        <div className="rerereview">{props.review}</div>
    </div>
)

class RecipePage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            
        }
    }
    componentDidMount(){

        
    }
    render(){
        return(
            <div className="Mcontainer">
            <Header/>
                <div className="Scontainer">
                    <div className="section1">
                        <div className="gallery">
                            <img className="gimg" src={recipe} alt="aa" />
                            <img className="gimg" src={recipe} alt="aa"/>
                            <img className="gimg" src={recipe} alt="aa"/>
                            <img className="gimg" src={recipe} alt="aa"/>
                        </div>
                        <div className="Mgallery">
                           <NavLink to="/overviewcook"> <img src={recipe} alt="as"/></NavLink>
                        </div>
                        <div className="Mdetails">
                            <div className="dishC">Dish Category</div>
                            <div className="dishN">Be Rasa Tehui <span className="dishch">by San Sebastian</span></div>
                            <div><Stars amount={5} type={4}/><span style={{marginLeft:"10px",color:"#46B61A"}}>4.8</span></div>
                        </div>
                        <div className="Sdetails">
                            <div className="Dpart">
                                <div className="dphead"><img src={prep} style={{paddingRight: ".3rem"}} alt="p"/>PREP TIME</div>
                                <div className="dpnum" style={{marginTop:".5rem"}}>2<span className="dptext">hrs</span> 30<span className="dptext">mins</span></div>
                            </div>
                            <div className="Dpart" style={{borderRight: " 1px #DDDDDD solid",borderLeft: " 1px #DDDDDD solid"}}> 
                                <div className="dphead">COOK TIME</div>
                                <div className="dpnum">30 </div>
                                <div className="dptext">mins</div>
                            </div>
                            <div className="Dpart">
                                <div className="dphead">CALORIES</div>
                                <div className="dpnum">320</div>
                                <div className="dptext">per serving</div>
                            </div>
                        </div>
                    </div>
                    <div className="section2" style={{float:"left"}}>
                        <div className="headeri">Directions</div>
                        {directions.map(n=>{
                            return <Direction num={n.num} text={n.text}/>
                        })}
                        <div className="headeri">Ingredients</div>
                        <ul style={{columns:"2"}}>
                            {Ingredients.map(z=>{
                                return <Ingri name={z}/>
                            })}
                        </ul>
                    </div>
                    <div className="section21" style={{float:"right"}}>
                        <div className="header2">LET THE COOK <div className="header22">DO IT FOR YOU</div></div>
                        {chefs.map(b=>{
                            return <Cheff {...b}/>
                        })}
                    </div>
                    <div className="section3" >
                        <h3>Related Recipes</h3>
                        <div style={{borderTop:"1px solid #E8E8E8",marginBottom:"2rem"}}> 
                        {recipess.map(q=>{
                            return <Recipee {...q}/>
                        })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RecipePage;