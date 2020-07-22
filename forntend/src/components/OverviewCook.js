import React from 'react';
import Header from './Header';
import Pag from './CookersPaginat';


class Checkbox extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isActive:false,
            text:props.text
        }
    }
    componentDidMount(){

    }
    render(){
        return(
            <button className={this.state.isActive?"active":"noactive"}>
                {this.state.text}
            </button>
        )
    }
}


const OverviewCook = () => (
    <div style={{background: "#F3F3F3"}}>
        <Header/>
        <div className="OV_searchbar">
            <div className="OVS_containter">
                <label className="ovstitle">Sort by</label>
                <input type="text" className="OVS_i" placeholder="Distace: Close to Far Away"></input>
                <input type="text" className="OVS_i" placeholder="Rating: High to Low"></input>
                <div  className="ovstitle">Filter by</div>
                <input type="text" className="OVS_i" placeholder="Price"></input>
                <input type="text" className="OVS_i" placeholder="All Ratings"></input>
                <input type="text" className="OVS_i" placeholder="Cusine"></input>
                <input type="text" className="OVS_i" placeholder="Specific Food"></input>
            </div>
        </div>
        <div className="OV_map" >
            
        </div>
        <div className="OV_mapsearch">
            <div className="mapsearchCO">
                <div className="mapsearchs">Search: Cooks, Chefs</div>
                <div className="mapresult">location</div>
            </div>    
        </div>
        <div className="OV_cooksearch">
            <div class="fetureH1">
                COOKS <span class="nextH">  NEAR YOU</span>
            </div>
        </div>
        <div className="OV_cooks">
            <Pag/>
        </div>
    </div>

)

export default  OverviewCook

/*{cookers.map(co=>{
                return <Cooker {...co}/>
            })}*/