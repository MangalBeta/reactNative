import React from "react";

import { Container,View,Picker, Item,Form,Content,Top, List, ListItem, InputGroup, Input, Icon, Text, Label, Button } from 'native-base';
const Items = Picker.Item;
import { Col, Row, Grid } from 'react-native-easy-grid';
import styles from "./invitevistorStyleSheet.js";

import {
     Image
} from 'react-native';
export const InviteVistorsComponent = ({onValueChange,selectedValue}) => {

     return (
          <Content style={{top : 20}}>
               <Text style={styles.text}>Invite Your Visitor</Text>
               <Text style={styles.text1}>Enter your visitor details and we will send them a PIN</Text>
               <Picker
                    style={styles.select}
                    mode='dropdown'
                    selectedValue={selectedValue}
                    onValueChange={onValueChange}>
                    <Items label='Select visitor from contact' value='' />
                    <Items label='234234234' value='234234234' />
                    <Items label='234234234' value='234234234' />
                    <Items label='534435345' value='534435345' />
               </Picker>
               <Text style={{textAlign : 'center',fontSize: 25}}>Or</Text>
               <Form style={{padding : 10}}>
                    <Item regular style={{marginBottom : 25}}>
                         <Input  placeholder="Type a phone number" style={styles.input}/>
                    </Item>
                    <Grid spacing={8}>
                         <Col size={28}><Button info>
                              <Text>Invite another visitor </Text>
                         </Button></Col>
                         <Col size={15}><Button  light>
                              <Text >Invite visitor </Text>
                         </Button></Col>
                    </Grid>
               </Form>
          </Content>

     )
}
export default InviteVistorsComponent;
