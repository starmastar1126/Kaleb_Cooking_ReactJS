import React from 'react';
import Pagination from 'react-paginating';
import Cooker from './Cooker'
import c1 from '../images/c1.png'
import c2 from '../images/c2.png'
import c3 from '../images/c3.png'
import c4 from '../images/c4.png'
import c5 from '../images/c5.png'
import c6 from '../images/c6.png'
import { NavLink} from 'react-router-dom';

const cookers = [
  {
      name:'JANE SMITH',
      dis:'0.5',
      age:'23',
      gender:'Male',
      experience:'10',
      aboutMe:'Growing food, cooking food and sharing food defines my daily life. I am a food professional and make my living with my organic fair trade food company. Food consumes me just as much as I consume it. Upon moving to our farm in the Cowichan Valley I have found my food mecca.',
      specialtyFoods: "Pudding, Beef Skewers, Ice Cream, Pinot Grigio, French Toast, Basked Salmon",
      availability: "Mon.       Tues.       Sat.",
      times: "1-3pm         2-6pm    2-9pm  ",
      cookOrChef: "Chef",
      price:'20.00',
      rank:'4.9',
      stars:5,
      reviews:'88',
      facebook:false,
      linkedin:'1',
      youtube:undefined,
      twiter:undefined,
      pintrest:true,
      secure:false,
      email:true,
      details:false,
      phone:false,
      payment:false,
      img:c1
  },
  {
      name:'JOHN DOE',
      dis:'0.5',
      age:'23',
      gender:'Male',
      experience:'10',
      specialty:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pulvinar consectetur tortor in finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam vehicula ultricies massa id dictum.',
      price:'20.00',
      rank:'4.9',
      stars:5,
      reviews:'88',
      facebook:undefined,
      linkedin:undefined,
      youtube:'2',
      twiter:undefined,
      pintrest:'2',
      secure:false,
      email:false,
      details:false,
      phone:false,
      payment:false,
      img:c2
  },
  {
      name:'TONY JEREMY',
      dis:'0.5',
      age:'23',
      gender:'Female',
      experience:'10',
      specialty:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pulvinar consectetur tortor in finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam vehicula ultricies massa id dictum.',
      price:'20.00',
      rank:'4.9',
      stars:5,
      reviews:'88',
      facebook:'1',
      linkedin:'1',
      youtube:'1',
      twiter:'1',
      pintrest:'1',
      secure:false,
      email:false,
      details:false,
      phone:false,
      payment:false,
      img:c3
  },
  {
      name:'SHAWN JACKSON',
      dis:'0.5',
      age:'23',
      gender:'Male',
      experience:'10',
      specialty:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pulvinar consectetur tortor in finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam vehicula ultricies massa id dictum.',
      price:'20.00',
      rank:'4.9',
      stars:5,
      reviews:'88',
      facebook:undefined,
      linkedin:undefined,
      youtube:undefined,
      twiter:undefined,
      pintrest:undefined,
      secure:false,
      email:false,
      details:false,
      phone:false,
      payment:false,
      img:c4
  },
  {
      name:'RINA SMITH',
      dis:'0.5',
      age:'23',
      gender:'Female',
      experience:'10',
      specialty:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pulvinar consectetur tortor in finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam vehicula ultricies massa id dictum.',
      price:'20.00',
      rank:'4.9',
      stars:5,
      reviews:'88',
      facebook:undefined,
      linkedin:undefined,
      youtube:undefined,
      twiter:undefined,
      pintrest:undefined,
      secure:false,
      email:false,
      details:false,
      phone:false,
      payment:false,
      img:c5
  },
  {
      name:'JANE SMITH',
      dis:'0.5',
      age:'23',
      gender:'Male',
      experience:'10',
      specialty:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pulvinar consectetur tortor in finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam vehicula ultricies massa id dictum.',
      price:'20.00',
      rank:'4.9',
      stars:5,
      reviews:'88',
      facebook:undefined,
      linkedin:undefined,
      youtube:undefined,
      twiter:undefined,
      pintrest:undefined,
      secure:false,
      email:false,
      details:false,
      phone:false,
      payment:false,
      img:c6
  },
  {
      name:'JANE SMITH',
      dis:'0.5',
      age:'23',
      gender:'Male',
      experience:'10',
      specialty:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pulvinar consectetur tortor in finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam vehicula ultricies massa id dictum.',
      price:'20.00',
      rank:'4.9',
      stars:5,
      reviews:'88',
      facebook:undefined,
      linkedin:undefined,
      youtube:undefined,
      twiter:undefined,
      pintrest:undefined,
      secure:false,
      email:false,
      details:false,
      phone:false,
      payment:false,
      img:c6
  },
  {
      name:'JANE SMITH',
      dis:'0.5',
      age:'23',
      gender:'Male',
      experience:'10',
      specialty:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pulvinar consectetur tortor in finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam vehicula ultricies massa id dictum.',
      price:'20.00',
      rank:'4.9',
      stars:5,
      reviews:'88',
      facebook:undefined,
      linkedin:undefined,
      youtube:undefined,
      twiter:undefined,
      pintrest:undefined,
      secure:false,
      email:false,
      details:false,
      phone:false,
      payment:false,
      img:c6
  },
  {
      name:'JANE SMITH',
      dis:'0.5',
      age:'23',
      gender:'Male',
      experience:'10',
      specialty:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pulvinar consectetur tortor in finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam vehicula ultricies massa id dictum.',
      price:'20.00',
      rank:'4.9',
      stars:5,
      reviews:'88',
      facebook:undefined,
      linkedin:undefined,
      youtube:undefined,
      twiter:undefined,
      pintrest:undefined,
      secure:false,
      email:false,
      details:false,
      phone:false,
      payment:false,
      img:c6
  },
  {
      name:'JANE SMITH',
      dis:'0.5',
      age:'23',
      gender:'Male',
      experience:'10',
      specialty:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pulvinar consectetur tortor in finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam vehicula ultricies massa id dictum.',
      price:'20.00',
      rank:'4.9',
      stars:5,
      reviews:'88',
      facebook:undefined,
      linkedin:undefined,
      youtube:undefined,
      twiter:undefined,
      pintrest:undefined,
      secure:false,
      email:false,
      details:false,
      phone:false,
      payment:false,
      img:c6
  },
  {
      name:'JANE SMITH',
      dis:'0.5',
      age:'23',
      gender:'Male',
      experience:'10',
      specialty:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pulvinar consectetur tortor in finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam vehicula ultricies massa id dictum.',
      price:'20.00',
      rank:'4.9',
      stars:5,
      reviews:'88',
      facebook:undefined,
      linkedin:undefined,
      youtube:undefined,
      twiter:undefined,
      pintrest:undefined,
      secure:false,
      email:false,
      details:false,
      phone:false,
      payment:false,
      img:c6
  },
  {
      name:'JANE SMITH',
      dis:'0.5',
      age:'23',
      gender:'Male',
      experience:'10',
      specialty:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pulvinar consectetur tortor in finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam vehicula ultricies massa id dictum.',
      price:'20.00',
      rank:'4.9',
      stars:5,
      reviews:'88',
      facebook:undefined,
      linkedin:undefined,
      youtube:undefined,
      twiter:undefined,
      pintrest:undefined,
      secure:false,
      email:false,
      details:false,
      phone:false,
      payment:false,
      img:c6
  },
  {
      name:'JANE SMITH',
      dis:'0.5',
      age:'23',
      gender:'Male',
      experience:'10',
      specialty:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pulvinar consectetur tortor in finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam vehicula ultricies massa id dictum.',
      price:'20.00',
      rank:'4.9',
      stars:5,
      reviews:'88',
      facebook:undefined,
      linkedin:undefined,
      youtube:undefined,
      twiter:undefined,
      pintrest:undefined,
      secure:false,
      email:false,
      details:false,
      phone:false,
      payment:false,
      img:c6
  }
]

const limit = 6;
const pageCount =  Math.ceil(cookers.length/2);




const cooklist = () => {
  const array = []
  let counter = 0;
  let subarray = []
  cookers.map(n=>{

    if(counter!=limit){
      subarray.push(n)
      counter ++ ;
    }
    else{
      array.push(subarray);
      subarray = []
      subarray.push( n)
      counter = 1
    }

  })
  array.push(subarray)

  return array;
}

const fruits2 = cooklist()

const total = fruits2.length * limit;

 
export default class PAG extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPage: 1
    };
  }
  componentDidMount(){
  }
 
  handlePageChange = (page, e) => {

    this.setState({
      currentPage: page
    });
  };
 
  render() {
   // const { currentPage } = this.state;
    return (
      <div className="container">
          {fruits2[this.state.currentPage-1].map((item) => 
          {
           
            return <NavLink to="/cookprofile"><Cooker {...item}/></NavLink>})}
        <Pagination
          total={total}
          limit={limit}
          pageCount={pageCount}
          currentPage={this.state.currentPage}
        >
          {({
            pages,
            currentPage,
            hasNextPage,
            hasPreviousPage,
            previousPage,
            nextPage,
            totalPages,
            getPageItemProps
          }) => (
            <div className="paginationC">
              
 
              {hasPreviousPage && (
                <button
                  {...getPageItemProps({
                    pageValue: previousPage,
                    onPageChange: this.handlePageChange
                  })}
                >
                  {'Prev'}
                </button>
              )}
 
              {pages.map(page => {
                let activePage = null;
                if (currentPage === page) {
                  activePage = { backgroundColor: '#5ED03A' , color:"white", border:"1px solid #5ED03A "};
                }
                return (
                  <button
                    {...getPageItemProps({
                      pageValue: page,
                      key: page,
                      style: activePage,
                      onPageChange: this.handlePageChange
                    })}
                  >
                    {page}
                  </button>
                );
              })}
 
              {hasNextPage && (
                <button
                  {...getPageItemProps({
                    pageValue: nextPage,
                    onPageChange: this.handlePageChange
                  })}
                >
                  {'Next'}
                </button>
              )}
 
     
            </div>
          )}
        </Pagination>
      </div>
    );
  }
}
 
/*

<button
                {...getPageItemProps({
                  pageValue: 1,
                  onPageChange: this.handlePageChange
                })}
              >
                first
              </button>

                       <button
                {...getPageItemProps({
                  pageValue: totalPages,
                  onPageChange: this.handlePageChange
                })}
              >
                last
              </button>


              */