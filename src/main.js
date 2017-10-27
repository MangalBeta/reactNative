import React from "react";
import createStore from "./store/store";
//import AppContainer from "./AppContainer";
import { Router } from "react-native-router-flux";
import scenes from "./routes/scenes";
import { Provider } from "react-redux";

export default class Root extends React.Component{
	renderApp(){
		const initialState = window.___INTITIAL_STATE__;
		const store = createStore(initialState);
		return (
			<Provider store={store}>
				<Router scenes={scenes} />
			</Provider>
		);
	}
	render(){
		return this.renderApp();
	}
}
