import React, {Component}  from 'react';
import styles from './styles.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import * as firebase from "firebase";
import uuid from "uuid";
const useStyles = {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
};
const GreenCheckbox = withStyles({
})(props => <Checkbox color="default" {...props} />);
class Home extends Component{  
  state = {
    text: ""
  };
  handlePress = () => {
    alert("Button pressed!");
      firebase
        .database()
        .ref("captions")
        .push({ name: this.state.text });
    
  };
  render(){  
  return (
    <div>
    <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUbAbjJJrYoCaqWJR3z9qagZdp5FOtWFwleRf-A90LijT2Mt7W&s'}
    
    
    className={styles.Image}/>
                <form noValidate autoComplete="off">
                <TextField id="outlined-basic" label="What Do You Think!" variant="outlined"  multiline={false} onChangeText={text => {this.setState({ text: text });}} value={this.state.name}/>
                </form>
               
                <FormGroup row>
      <FormControlLabel
        control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} value="checkedH" />}
        label="Favorite"
      />
    </FormGroup>
    <Button style={useStyles} onPress={this.handlePress}>Bublish</Button>
         
      </div>
    
  );
}}
export default Home;