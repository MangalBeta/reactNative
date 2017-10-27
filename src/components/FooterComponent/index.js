import React from "react";
import { Content, Footer, FooterTab, Button, Icon,Text } from 'native-base';

// import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./FooterComponentStyles";


export const FooterComponent =  ({logo})=>{
	//
	// //tab bar items
	// const tabs = [{
	// 	title:"TaxiCar",
	// 	subTitle:"",
	// 	icon:"car"
	// },
	// {
	// 	title:"TaxiShare",
	// 	subTitle:"",
	// 	icon:"car"
	// },
	// {
	// 	title:"Premium",
	// 	subTitle:"",
	// 	icon:"car"
	// },{
	// 	title:"TaxiBike",
	// 	subTitle:"",
	// 	icon:"car"
	// }];

	return (

		<Footer >
			    <FooterTab>
				   <Button><Icon name="ios-menu" md="md-menu" /></Button>
				   <Button active>

					  <Icon name='md-add' />
				   </Button>
				   <Button>
					  <Icon name="ios-settings" md="md-settings" />
					   <Text>Setting</Text>
				   </Button>
			    </FooterTab>
			</Footer>
	);
}

export default FooterComponent;
