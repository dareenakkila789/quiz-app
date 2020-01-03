import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import weblogo from '../weblogo.png'
import {NavLink} from 'react-router-dom'
class login extends Component{
    state = {
        list:[],
        email:'',
        passoword:''

    }
    handleEmailChange = (e)=>{
        this.setState({
            text:e.target.value
        })
    }
    handlePasswrodChange = (e)=>{
        this.setState({
            text:e.target.value
        })
    }
    render(){
        let {email,passoword} = this.state;
  
       
        return(
            <div className='divstyle'>
                <div className="App">
                <h1>Welcome</h1>
          <img className="logo" src ={weblogo} alt= 'logo'/> </div>
        
          <div>
          <input className='navbar' defaultValue={email} placeholder="enter ur email"  onChange={this.handleEmailChange}/>
                <input className='navbar' defaultValue={password} type='password' placeholder="enter ur passoword" onChange={this.handlePasswrodChange}/>
                <button className='navbutton'>Add</button>
                <NavLink to='signup'>You don't have an account?</NavLink>
              
            </div>
            </div>


        )
    }
}
export default login;



