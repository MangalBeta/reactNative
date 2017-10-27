import React from "react";
import {View,Text} from "react-native";
import { Container,Content} from "native-base";
import LoginComponent from "./loginComponent";
import styles from "./loginComponent/loginStyleSheet.js";
class Login extends React.Component {
     constructor(props){
          super(props)
     }
     render(){
          return (
               <Container style={styles.container}>
                    <LoginComponent />
               </Container>
          )
     }
}
export default Login;
