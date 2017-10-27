import React,{Component} from "react";
import {
     AsyncStorage,
	ActivityIndicator
} from 'react-native';
import { Actions, Scene,Router } from "react-native-router-flux";
import HomeContainer from "./home/containers/homeContainer";
import LoginContainer from "./login/containers/loginContainer";
import SignupContainer from "./signup/containers/signupContainer";
import AddPhoneContainer from "./addphonenumber/containers/addphonenumberContainer";
import ConfirmPhoneContainer from "./confirmphonenumber/containers/confirmnumberContainer";

import InviteVisitorContainer from "./invitevistor/containers/invitevistorContainer";

//import HomeContainer from "./home/components/home";
class Scenes extends Component {
	constructor(){
		 super();
		this.state = { hasToken: false,isLoaded: false };
	}
componentWillMount() {
   AsyncStorage.getItem('id_token').then((token) => {
	this.setState({ hasToken: token !== null,isLoaded: true })
   })
 }
  isLoggedIn() {
	  AsyncStorage.getItem('id_token').then((token) => {
		  if (token == null) {
 	           Actions.login();
 	      }
	  })
 }
 render() {
if (!this.state.isLoaded) {
     return (
	  <ActivityIndicator />
     )
}else{
	return(
	  <Router>
	    <Scene key="root" >
		   <Scene key="login" component={LoginContainer} title="login"
		hideNavBar={true}
		   initial={!this.state.hasToken}/>
	    <Scene key="signup" component={SignupContainer} title="signup"    initial={this.state.hasToken} hideNavBar={true} />
		   <Scene key="addnumber" component={AddPhoneContainer} title="addnumber"   initial={this.state.hasToken} hideNavBar={true} onEnter={this.isLoggedIn}/>
		   <Scene key="confirmphonenumber" component={ConfirmPhoneContainer} title="confirmphonenumber"  initial={this.state.hasToken} hideNavBar={true}onEnter={this.isLoggedIn}/>
		  <Scene key="invite" component={InviteVisitorContainer} title="invite"   hideNavBar={true} initial={this.state.hasToken} onEnter={this.isLoggedIn}/>

	   </Scene>

	  </Router>
	)
}

  }
}


export default Scenes;
