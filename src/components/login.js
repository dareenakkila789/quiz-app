import React ,{Component} from 'react';
// import ReactDOM from 'react-dom';
import weblogo from '../weblogo.png'
import {NavLink} from 'react-router-dom'
import * as firebase from 'firebase'


class login extends Component{
    state = {
        email:'',
        password:''

    }
    handleChange = (e)=>{

        let key = e.target.name
        this.setState({
            [key]:e.target.value
        })
    }

 
    signin = ()=>{

        console.log(this.state ,"this.state")
        firebase.auth().signInWithEmailAndPassword(this.state.email,
         this.state.password).catch( (error)=> {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.error(errorCode,errorMessage);

        }).then(()=>{
            
            this.props.history.push('/mainPage')
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
          <input className='navbar' defaultValue={email} placeholder="enter ur email"  
          onChange={this.handleChange} name = 'email'/>
                <input className='navbar' defaultValue={password} type='password' 
                placeholder="enter ur passoword" onChange={this.handleChange} name='password'/>


                <button className='navbutton' onClick ={this.signin} >Add</button>

                <NavLink to='signup'>You don't have an account?</NavLink>
              
            </div>
            </div>


        )
    }
}
export default login;