import React from "react";
import { Actions } from 'react-native-router-flux';
import {
     Image,
     AsyncStorage,
     Alert
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import Addphonenumber from "./addphonenumber";
import styles from "./addphonenumber/addphonenumberStyleSheet.js";
import FooterComponent from '../../../components/FooterComponent'
class AddPhoneNumbers extends React.Component {
     constructor(props) {
       super(props);
       this.state = {
           selectedItem: undefined,
           selected1: 'key0',
           results: {
               items: [],
           },
       };
   }
   getProtectedQuote() {
        AsyncStorage.getItem('id_token').then((token) => {
             if(token !== null) {
                  const { navigate } = this.props.navigation;
                  navigate('confirmphonenumber', { name: 'Jane' })
             }
         })
  }
  async userLogout() {
     try {
       await AsyncStorage.removeItem('id_token');
       Alert.alert('Logout Success!');
       Actions.login();
     } catch (error) {
       console.log('AsyncStorage error: ' + error.message);
     }
   }
   onSubmitForm() {
        const { navigate } = this.props.navigation;
        navigate('confirmphonenumber', { name: 'Jane' })
   }
render(){
     return (
          <Container style={styles.containers}>
          <Addphonenumber userLogout ={this.userLogout.bind(this)} getProtectedQuote={this.getProtectedQuote.bind(this)} onSubmitForm = {this.onSubmitForm.bind(this)} selected1 ={this.state.selected1} />
<FooterComponent />
 </Container>
          )
     }
}
export default AddPhoneNumbers;
