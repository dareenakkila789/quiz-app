import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login'
import SignUp from './components/signup'
import error from './components/error'
import Navigation from './components/navigation'

import {BrowserRouter,Route,Switch} from 'react-router-dom'


    function App() {
      return (
        
          <BrowserRouter>
          <div >
          <Navigation/>
          <Switch>
          
          <Route exact path='/login' component={Login}/>
          <Route exact path='/signup' component={SignUp}/>
          <Route component={error}/>
          
          </Switch>
          </div>
          </BrowserRouter>
         
        
      );
    }

export default App;
