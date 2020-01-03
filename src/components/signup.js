import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase'

 class signUp extends Component{
    state = {
        list:[],
        email:'',
        passoword:''

    }

    handlePasswrodChange = (e)=>{
        this.setState({
            email: e.target.value
        })
    }
    handlePasswrodChange = (e) => {
        this.setState({
            password: e.target.value
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