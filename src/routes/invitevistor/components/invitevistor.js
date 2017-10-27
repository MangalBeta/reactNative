import React from "react";
import { Actions } from 'react-native-router-flux';

import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import Invitevistor from "./invitevistorcomponent";
import styles from "./invitevistorcomponent/invitevistorStyleSheet.js";
import FooterComponent from '../../../components/FooterComponent'
class InviteVistors extends React.Component {
     constructor(props) {
       super(props);
       this.state = {
            selectedItem: undefined,
            selected1: 'key1',
            results: {
                items: []
            }
       };
   }
   onValueChange (value: string) {
        this.setState({
            selected1 : value
        });
    }
   onSubmitForm() {
        this.setState({selected1 : "helooooo"});
   }
render(){
     return (
          <Container style={styles.containers}>
          <Invitevistor  onValueChange={this.onValueChange.bind(this)}  selectedValue={this.state.selected1}/>
          <FooterComponent />
      </Container>
          )
     }
}
export default InviteVistors;
