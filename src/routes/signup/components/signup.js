import React from "react";
import { Actions } from 'react-native-router-flux';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import SignupComponent from "./signupComponent";
import styles from "./signupComponent/signupStyleSheet.js";

class Signup extends React.Component {
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

     render(){
          return (
          <Container style={styles.containers}>
          <SignupComponent />
          </Container>
          )
     }
}
export default Signup;
