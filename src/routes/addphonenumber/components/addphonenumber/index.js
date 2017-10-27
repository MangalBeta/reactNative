import React from "react";
import { Container,View, Form,Item,Content,Top, List, ListItem, InputGroup, Input, Icon, Text, Label, Button } from 'native-base';
import styles from "./addphonenumberStyleSheet.js";
import {
     Image,
     
} from 'react-native';
export const AddPhoneNumberComponent = ({onSubmitForm,selected1,getProtectedQuote,userLogout}) => {

     return (
          <Content style={{top : 50}}>
               <Text style={styles.text}>Hi mangal@yopmail.com</Text>
               <Text  style={styles.text1}>Lets setup phonenumber</Text>
                    <Button transparent>
                           <Text>The Nederland</Text>
                      </Button>
              <Form style={{padding : 10}}>
             <Item regular style={{marginBottom : 20}}>
             <Label style={{fontSize:20,textAlign: 'center',marginLeft:20}}>+31</Label>
            <Input  placeholder="Your phone number" style={styles.input}/>
            </Item>
          <Button  style ={styles.marginbtn}  onPress={getProtectedQuote}>
               <Text style={{marginLeft : 20}}>Done</Text>
          </Button>
          <Button  full onPress={userLogout}>
               <Text style={{marginLeft : 20}}>Logout</Text>
          </Button>
          </Form>

     </Content>

     )
}
export default AddPhoneNumberComponent;
