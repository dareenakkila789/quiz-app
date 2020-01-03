import React ,{Component} from 'react';
// import ReactDOM from 'react-dom';
import weblogo from '../weblogo.png'
import {NavLink} from 'react-router-dom'
import * as firebase from 'firebase'


class login extends Component{
    state = {
        email:'',
        passoword:''

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

    signin = ()=>{
        firebase.auth().signInWithEmailAndPassword(this.state.email,
         this.state.password).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.error(errorCode,errorMessage);

        }).then(function(){
            
            this.props.history.path('/login')
        });
    }
    render(){
        let {email,password} = this.state;
  
       
        return(
            <div className='divstyle'>
                <div className="App">
                <h1>Welcome</h1>
          <img className="logo" src ={weblogo} alt= 'logo'/> </div>
        
          <div>
          <input className='navbar' defaultValue={email} placeholder="enter ur email"  onChange={this.handleEmailChange}/>
                <input className='navbar' defaultValue={password} type='password' placeholder="enter ur passoword" onChange={this.handlePasswrodChange}/>
                <button className='navbutton' onClick ={this.signin} >Add</button>

                <NavLink to='signup'>You don't have an account?</NavLink>
              
            </div>
            </div>


        )
    }
}
export default login;