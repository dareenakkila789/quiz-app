import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase'

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
            .createUserWithEmailAndPassword(email, password)
            .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.error(errorCode, errorMessage);
                // ...
            })
        // .then(function(){
        // db.collection("users").add({
        //     first: "Ada",
        //     last: "Lovelace",
        //     born: 1815
        // })
        //     .then(function (docRef) {
        //         console.log("Document written with ID: ", docRef.id);
        //     })
        //     .catch(function (error) {
        //         console.error("Error adding document: ", error);
        //     });
        // });
import weblogo from '../weblogo.png'
import {NavLink} from 'react-router-dom'

class signup extends Component{
    state = {
        email:'',
        password:''

    }
    handleEmailChange = (e)=>{
        this.setState({
            email:e.target.value
        })
    }
    handlePasswordChange = (e)=>{
        this.setState({
            password:e.target.value
        })
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
               <NavLink className='btn-primary' to='/'>create</NavLink>
                
            </div>


        )
    }
}
export default signup;


    }
    render() {
        let { email, password } = this.state;

        return (
            <div className='divstyle' >
                <input className='navbar' defaultValue={email} placeholder="enter ur email" onChange={this.handleEmailChange} />
                <input className='navbar' defaultValue={password} type='password' placeholder="enter ur passoword" onChange={this.handlePasswrodChange} />
                <button className='navbutton' onClick={this.addUser} >Create</button>

            </div>
        );
    }
}
export default signUp;