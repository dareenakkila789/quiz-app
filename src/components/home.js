import React ,{Component} from 'react';

import * as firebase from 'firebase'

class Home extends Component{
                        
    componentDidMount(){
        const db = firebase.firestore();

        db.collection("users").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data().first}`);
            });
        });

    }
    addUser = ()=>{

        const db = firebase.firestore();


        firebase.auth().createUserWithEmailAndPassword('reeham@gmail.com',
         'password').catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        }).then(function(){
        db.collection("users").add({
            first: "Ada",
            last: "Lovelace",
            born: 1815
        })
            .then(function (docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });
        });


    }


    signin = ()=>{
        firebase.auth().signInWithEmailAndPassword('reeham@gmail.com',
         'password').catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;


            console.log(error)
            // ...
        }).then(function(){
            
            this.props.history.path('/welcome')
        });
    }

    render(){
        return(

            <div>
                Home page 

                <button onClick={this.addUser}>add user</button>



                <button onClick={this.signin}>sign in </button>

            </div>
        )
    }
}

export default Home

