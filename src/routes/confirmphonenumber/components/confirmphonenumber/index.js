import React from "react";
import { Container,View, Form,Item,Content,Top, List, ListItem, InputGroup, Input, Icon, Text, Label, Button } from 'native-base';
import styles from "./confirmphonenumberStyleSheet.js";
import {
     Image
} from 'react-native';
export const ConfirmPhoneNumberComponent = ({onSubmitForm}) => {

     return (
          <Content style={{top : 50}}>
               <Text style={styles.text}>We have sent you an SMS with a code to the  number above</Text>
               <Text  style={styles.text1}>To complete your phone number verification,please enter the 6-digit activation code</Text>
                    <Text  style={styles.text2}>__  __  __  __  __  __</Text>

            <Button transparent style={{marginLeft : 125,marginTop: 20}}>
                    <Text style={styles.resend}>Resend Code</Text>
               </Button>

          </Content>

     )
}
export default ConfirmPhoneNumberComponent;
