import React,{Component} from "react";
import { View,Text,Header,Body,Thumbnail,Button } from "native-base";
import {
     Image,TouchableHighlight
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from "./loginStyleSheet.js";
class LoginComponent extends Component {
     constructor(props){
          super(props)
     }
     goToLoginPage(){
          Actions.signup();
     }
     render() {
          return (
               <Image
                    source={require('./gorod-eyfeleva-bashnya-parizh.jpg')}
                    style={styles.backgroundImage}>
                    <Text style={styles.welcome}>
                         Welcome to arke
                    </Text>
                    <Text style={styles.instructions}>
                         Make your guests welcome
                    </Text>

                          <Button   block info style={styles.marginBottom} onPress={this.goToLoginPage}>
                               <Text style={styles.buttonText}> Login </Text>
                          </Button>


               </Image>



          )
     }
}
export default LoginComponent;
