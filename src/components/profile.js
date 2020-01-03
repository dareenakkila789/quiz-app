import React, { Component } from "react";
import weblogo from '../weblogo.png'
import userpic from '../user.png'
class Profile extends Component {
    state = {
        list:[],
        username:'',
        pio:''

    }
    handleUsernameChange = (e)=>{
        this.setState({
            text:e.target.value
        })
    }
    handlePioChange = (e)=>{
        this.setState({
            text:e.target.value
        })
    }



  render() {
    let {username,pio} = this.state;
    return (
     <div>
        <input className='navbar' defaultValue={username} placeholder="enter ur username!"  onChange={this.handleUsernameChange}/>
                <input className='navbar' defaultValue={pio} type='password' placeholder="enter ur pio!" onChange={this.handlePioChange}/>
        <img className="logo" src ={userpic} alt= 'logo'/> 
        />

       

        <button onClick={this.handlePress}>
          
          Edit Profile
        </button>
         </div>
    );
  }
}
export default Profile;


