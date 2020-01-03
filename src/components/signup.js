import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
 class signUp extends Component{
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
            <div className='divstyle' >
               <div><input className='navbar' defaultValue={email} placeholder="enter ur email"  onChange={this.handleEmailChange}/></div> 
                <div><input type="password"className='navbar' defaultValue={password}  placeholder="enter ur passoword" onChange={this.handlePasswrodChange}/></div>
                <button className='navbutton'>Create</button>
            </div>
        );
    }
}
export default signUp;