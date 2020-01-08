import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login'
import SignUp from './components/signup'
import error from './components/error'
import Navigation from './components/navigation'
import Profile from './components/profile'
import EditProfile from './components/editprofile'
import home from './components/home'

import {BrowserRouter,Route,Switch} from 'react-router-dom'


    function App() {
      return (
        
          <BrowserRouter>
          <div >
          <Navigation/>
          <Switch>

          <Route exact path='/' component={Login}/>
          <Route exact path='/signup' component={SignUp}/>
          <Route exact path='/profile' component={Profile}/>
          <Route exact path='/editprofile' component={EditProfile}/>
          <Route exact path='/home' component={home}/>

          <Route component={error}/>
          
          </Switch>
          </div>
          </BrowserRouter>
         
        
      );
    }

export default App;