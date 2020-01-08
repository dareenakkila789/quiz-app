import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase'
import weblogo from '../weblogo.png'
import {NavLink} from 'react-router-dom'
class signUp extends Component{
    state = {
        list:[],
        email:'',
        passoword:''

    }


    handlePasswrodChange = (e) => {
        this.setState({
            password: e.target.value
        })
    }


    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value
        })
    }


    addUser = () => {
        const { email, password } = this.state

        firebase.auth()
            .createUserWithEmailAndPassword(email,password)
        }

    render(){
        let {email , password} = this.state;
       
        return(
            <div className='divstyle' >
                <div className="App">
          <h1>Welcome</h1>
          <img className="logo" src ={weblogo} alt= 'logo'/> </div>
                <h1>Let's create your account!</h1>
               <div className ='firstinput'><input className='navbar' defaultValue={email} placeholder="enter ur email"  
          onChange={this.handleEmailChange}/></div> 
               <div className ='secondinput'>  <input className='navbar' defaultValue={password} type='password' placeholder="enter ur password" onChange={this.handlePasswordChange}/></div>
                 <button  className='navbutton' onClick={this.addUser}>Create</button>
                
            </div>


        )
    }
}
export default signUp;