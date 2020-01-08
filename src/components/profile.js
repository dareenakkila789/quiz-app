import React, { Component } from "react";
import weblogo from '../weblogo.png'
import EditProfile from './editprofile'
import userpic from '../user.png'
import {NavLink} from 'react-router-dom'

class Profile extends Component {
    state = {
        username:'username',
        bio:'bio',

  render() {
    let {username,bio} = this.state;
    return (
     <div>

        <img className="logo" src ={userpic} alt= 'defaultpic'/> 
        <h1> {username}</h1>
        <div>
        <h1>{bio}</h1></div>
        <NavLink to='editprofile'>Edit your profile!</NavLink>
         </div>
    );
  }
}};
export default Profile;



