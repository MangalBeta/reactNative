import React,{Component} from "react";
import { Field,reduxForm,formValueSelector} from 'redux-form';
import { Actions } from 'react-native-router-flux';
import { Container, Form,Item,Content,Top, List, ListItem, InputGroup, Input, Icon, Text, Label, Button,Body } from 'native-base';
import styles from "./signupStyleSheet.js";
import {
     Image,
     AsyncStorage,
     Alert
} from 'react-native';
import validate from '../../../../helper/validation'
class SignupComponent extends React.Component {
     constructor(props){
          super(props)
          this.state = {
               hasError : false
          };
          this.renderInput = this.renderInput.bind(this);
     }

     renderInput({ input, label,value, type,placeholder,secureTextEntry, meta: { touched, error, warning } }){
//console.log(input,"===================",value)

          if(error !== undefined){
               this.setState({hasError : true})
          }else{
               this.setState({hasError : false})
          }
          return(
               <Body>
                    <Item error= {this.state.hasError}>
                         <Input {...input} placeholder ={ placeholder} secureTextEntry={secureTextEntry} type={type} style={styles.input} />
                    </Item>
                    {this.state.hasError ? <Text style={{color: 'red'}}>{error}</Text> : <Text />}
               </Body>

          )
     }
     async saveItem(item, selectedValue) {
          try {
               await AsyncStorage.setItem(item, selectedValue);
          } catch (error) {
               console.error('AsyncStorage error: ' + error.message);
          }
     }
     userSignup(values) {
          console.log(values,"tvalues")
          if(this.state.hasError == false){
               Alert.alert('Login error', 'Please fill all the field');return;
          }else {

               this.saveItem('id_token',"dsadjsdasdjasdasdasdaksdjasjdjakdjasd");
               Alert.alert('Login Success!', 'Click the button to get a Chuck Norris quote!');
               Actions.addnumber();
          }
     }
     render(){
          // const {handleSubmit, pristine, reset, submitting} = this.props
          return (
               <Content padder>
                    <Image style={{width: '100%',height : 100,marginBottom: 100}}
                         source={require('./arke.png')}
                         />
                    <Form >
                    <Field name="email" type="text" component={this.renderInput} placeholder="Type a email"/>
                    <Field name="password" secureTextEntry={true}  component={this.renderInput} placeholder="Type a password"/>
                    <Button  style ={styles.marginbtn} >
                         <Text style={{marginLeft : 10}}>Signup</Text>
                    </Button>
               </Form>
               </Content>
          )
     }

}
SignupComponent = reduxForm({
    form: 'loginForm'
})(SignupComponent);
const selector = formValueSelector('loginform');
export default reduxForm({
     form: 'loginform',
     validate
})(SignupComponent)
