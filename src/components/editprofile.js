import React, { Component } from "react";
import weblogo from '../weblogo.png'
import userpic from '../user.png'
import {NavLink} from 'react-router-dom'
class editprofile extends Component {
    state = {
        username:'username',
        bio:'bio'

    }
    handleUsernameChange = (e)=>{
        this.setState({
            username:e.target.value
        })
    }
    handlebioChange = (e)=>{
        this.setState({
            bio:e.target.value
        })
    }

  render() {
    let {username,bio} = this.state;
    return (
     <div>

        <img className="logo" src ={userpic} alt= 'defaultpic'/> 
        <input className='navbar' defaultValue={username} placeholder="enter ur username"  onChange={this.handleUsernameChange}/>

        <div>
        <input className='navbar' defaultValue={bio} placeholder="enter ur bio" multiLine={true}  onChange={this.handlebioChange}/>
        <NavLink to='profile'>Done editing!</NavLink>
         </div>
         </div>
    );
  }
}
export default editprofile;


