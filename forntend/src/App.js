import React from 'react';
//import logo from './logo.svg';
import './App.css';
import AppRouter from './routers/AppRputer';

class App extends React.Component {
  // initialize our state


 componentDidMount(){

}
  
  render() {
    return (
            <div>
                  <AppRouter/>   
            </div>
    );
  }
}

export default App;
