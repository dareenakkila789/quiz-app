import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import weblogo from '../weblogo.png'

class login extends Component{
    state = {
        list:[],
        text:''
    }
    handleChange = (e)=>{
        this.setState({
            text:e.target.value
        })
    }
    render(){
        let {text , handleChange} = this.state;
       
        return(
            <div className='divstyle' >
                 
                <div className="App">
          <h1>Welcome</h1>
          <img className="logo" src ={weblogo} alt= 'logo'/> </div>
                <h1>Let's create your account!</h1>
               <div className ='firstinput'><input className='navbar' value={text} placeholder="enter ur email"  onChange={handleChange}/></div> 
               <div className ='secondinput'> <input className='navbar' type='password' value={text} placeholder="enter ur passoword" onChange={handleChange}/></div>
                <button className='navbutton'>create</button>
                
            </div>


        )
    }
}
export default login;



