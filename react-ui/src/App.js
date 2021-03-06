import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import Home from './components/pages/Home'
import Login from './components/pages/Login'
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import FacilityState from './context/facilityContext/facilityState'
import AuthState from './context/authContext/authState'
import setAuthToken from './utils/setAuthToken';
import Resource from './components/pages/Resource';

// import card from './components/Files/card'


if (localStorage.token) {
  setAuthToken(localStorage.token);
}
if (localStorage.user) {
  setAuthToken(localStorage.user);
}

function App() {
  return (
    <AuthState>
      <FacilityState>
        <Router>
          <div>
            <Navbar />
            <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/resource/:id' component={Resource}/>
              {/* <Route exact path='/register' component={Register} /> */}
              <Route exact path='/login' component={Login} /> 
              {/* <Route exact path='/card' component={card} />             */}
            </Switch>
          </div>
        </Router>
      </FacilityState>
    </AuthState>
  );
}
export default App;
