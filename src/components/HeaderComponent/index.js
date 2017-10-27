import React from "react";
// import { Text, Image } from "react-native";
import { Header,Button,Title,Icon,Left,Body,Right} from "native-base";
import styles from "./HeaderComponentStyles";

export const HeaderComponent =  ({logo})=>{
	return (
		<Header>
			<Left>
				<Button transparent>
                  <Icon name='menu' />
                </Button>
		   </Left>
		   <Body>
		   <Title>Header</Title>
	       </Body>
		   <Right />

		</Header>
	);
}

export default HeaderComponent;
