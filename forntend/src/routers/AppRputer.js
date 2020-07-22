import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Footer from '../components/Footer';
import Landing from '../components/landing';
import Overview from '../components/Overview';
import RecipePage from '../components/RecipePage';
import OverviewCook from '../components/OverviewCook';
import CookerProfile from '../components/CookerProfile';

const AppRouter = () =>(
    <Router>
          <div className="App">
            <Route exact path="/" component={Landing} />
            <Route exact path="/overview" component={Overview} />
            <Route exact path="/recipepage/:id" component={RecipePage} />
            <Route exact path="/overviewcook" component={OverviewCook} />
            <Route exact path="/cookprofile" component={CookerProfile} />
  
            <Footer/>
          </div>
    </Router>
);

export default AppRouter;


/*
    <BrowserRouter>
        <Header />
        <Switch>
            <Route path="/" component={Calculator} exact={true}/>
            <Route path="/dashboard" component={LogikalDashBoardPage}/>
            <Route path="/calculator" component={Calculator}/>
            <Route path="/edituserpage/:id" component={EditUserPage}/>
            <Route path="/mahsan" component={Mahsan}/>
            <Route path="/mifal" component={Moked} exact={true} />
            <Route path="/routeplanner" component={RoutePlan}/>
            <Route component={NotFoundPage}/>
        </Switch>
        <Footer/>
    </BrowserRouter>
    */






/*       
  <Route path="/dashboard" component={LogikalDashBoardPage}/>


<Route path="/calculator" component={Calculator}/>
            <Route path="/edit/:id" component={EditUserPage}/>
            <Route path="/routeplanner" component={RoutePlanner}/>*/