import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import {NavLink} from 'react-router-dom'
import weblogo from '../weblogo.png'

import * as firebase from 'firebase'
import 'firebase/auth'

class home extends Component{
    state = {
        question:'',
        answer:'',
        qs :[]

    }
    handleChange = (e)=>{
        let key = e.target.name

        this.setState({
            [key]:e.target.value
        })
    }
    addQues = ()=>{
const db = firebase.firestore();

        db.collection("questions-answers").add({
            question: this.state.question,
            answer: this.state.answer,
        })
        .then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
       
            }
            ReadData = ()=>{
                const db = firebase.firestore();
                const {qs} = this.state;
                
                db.collection("questions-answers").get().then((querySnapshot)=> {
                    querySnapshot.forEach((doc) =>{
                      //  console.log(doc.id, " => ", doc.data());
                        qs.push( doc.data())

                    });

                    this.setState({qs})
                });
                       
                            }
            
    render(){
        let {question,answer,qs} = this.state;
  
       
        console.log(qs)
        return(
            
            <div className='divstyle'>
                
                <div className="App">
                <h1>Questions reminder!</h1>
          <img className="logo" src ={weblogo} alt= 'logo'/> </div>
        
          <div>
          <input className='navbar' defaultValue={question} placeholder="enter ur question"
            onChange={this.handleChange} name ='question'/>
               <div> 
                   <input className='navbar' defaultValue={answer}
                    placeholder="enter the answer"  name="answer"
               onChange={this.handleChange}/>
               
               </div>
                <button  onClick ={this.addQues} className='navbutton'>Add</button>
                <button className='navbutton' onClick ={this.ReadData}>Quiz!</button>

                
              
            </div>
            </div>


        )
    }
}
export default home;