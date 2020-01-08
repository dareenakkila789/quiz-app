import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import {NavLink} from 'react-router-dom'
import weblogo from '../weblogo.png'
import * as firebase from 'firebase'
import 'firebase/auth'


class home extends Component{
    state = {
        question:'',
        answer:''

    }
    handleQuestionChange = (e)=>{

        this.setState({
            question:e.target.value
        })
    }

   
    handleAnswerChange = (e)=>{
        this.setState({
            answer:e.target.value
        })
    }

    addQues = ()=>{
        firebase.auth().NEWSTATMENT(this.state.question,
         this.state.answer)
    }


    render(){
        let {question,answer} = this.state;
  
       
        return(
            
            <div className='divstyle'>
                
                <div className="App">
                <h1>Questions reminder!</h1>
          <img className="logo" src ={weblogo} alt= 'logo'/> </div>
        
          <div>
          <input className='navbar' defaultValue={question} placeholder="enter ur question"  onChange={this.handleQuestionChange}/>
               <div> <input className='navbar' defaultValue={answer} placeholder="enter the answer" onChange={this.handleAnswerChange}/></div>
                <button  onClick ={this.addQues} className='navbutton'>Add</button>
                <button className='navbutton'>Quiz!</button>

                
              
            </div>
            </div>


        )
    }
}
export default home;