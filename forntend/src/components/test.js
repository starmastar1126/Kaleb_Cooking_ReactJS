import React from 'react';
import Pagination from 'react-paginating';
import {Recipe1} from './Recipe'

const fruits = [
  [<Recipe1/>,<Recipe1/>,<Recipe1/>,<Recipe1/>,<Recipe1/>,<Recipe1/>],
  [<Recipe1/>,<Recipe1/>,<Recipe1/>,<Recipe1/>,<Recipe1/>,<Recipe1/>],
  [<Recipe1/>,<Recipe1/>,<Recipe1/>,<Recipe1/>,<Recipe1/>,],
  [<Recipe1/>,<Recipe1/>,<Recipe1/>,<Recipe1/>,<Recipe1/>,],
  [<Recipe1/>,<Recipe1/>,<Recipe1/>,<Recipe1/>,<Recipe1/>,]
];
const limit = 6;
const pageCount = 5;
const total = fruits.length * limit;
 
export default class PAG extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPage: 1
    };
  }
 
  handlePageChange = (page, e) => {
    this.setState({
      currentPage: page
    });
  };
 
  render() {
    const { currentPage } = this.state;
    return (
      <div className="container">
        <ul className="recipes">
          {fruits[currentPage - 1].map(item => <li className="chefCo2" key={item}>{item}</li>)}
        </ul>
        <Pagination
          total={total}
          limit={limit}
          pageCount={pageCount}
          currentPage={currentPage}
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