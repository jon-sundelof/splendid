import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/global.scss';

/* auth pages */
import Signin from './pages/Signin';
import Signup from './pages/Signup';
/**********************************/

/*  layout components */
import Navbar from './components/navbar/Navbar';
/***************************************/

/* pages */
import DiscoverAds from './pages/DiscoverAds';
/***************************************/

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <main>
          <Switch>
            <Route exact path='/login' component={Signin} />
            <Route exact path='/signup' component={Signup} />

            <Route exact path='/' component={DiscoverAds} />
          </Switch>
        </main>
      </Router>
    </>
  );
}

export default App;
