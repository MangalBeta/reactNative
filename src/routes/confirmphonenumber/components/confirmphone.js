import React from "react";
import { Actions } from 'react-native-router-flux';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import Confirmphonenumber from "./confirmphonenumber";
import styles from "./confirmphonenumber/confirmphonenumberStyleSheet.js";
import FooterComponent from '../../../components/FooterComponent'
class ConfirmPhoneNumbers extends React.Component {
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
   onSubmitForm() {
        this.setState({selected1 : "helooooo"});
   }
render(){
     return (
          <Container style={styles.containers}>
          <Confirmphonenumber onSubmitForm = {this.onSubmitForm.bind(this)} selected1 ={this.state.selected1} />
          <FooterComponent />
      </Container>
          )
     }
}
export default ConfirmPhoneNumbers;
