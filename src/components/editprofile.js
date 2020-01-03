import React, { Component } from "react";
import weblogo from '../weblogo.png'
class editprofile extends Component {


  state = {
    color: "white",
    name: "username",
    bio:
      "add some important information about you!"
  };

  handlePress = () => {
    this.setState({ color: "#a6c9ed" });
    this.props.navigation({
      name: this.state.name,
      bio: this.state.bio,
      saveEditedProfile: this.saveEditedProfile
    });
  };

  saveEditedProfile = (name, bio) => {
    this.setState({
      name: name,
      bio: bio
    });
  };

  render() {
    return (
     <div>
        <label>{this.state.name}</label>
        <img className="logo" src ={weblogo} alt= 'logo'/> 
        />

        <label>{this.state.bio}</label>

        <button onClick={this.handlePress}>
          
          Edit Profile
        </button>
         </div>
    );
  }
}
export default editprofile;


