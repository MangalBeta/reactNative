import update from "react-addons-update";
import constants from "./actionsConstants";
import { Dimensions } from "react-native"
//--------------------
//Constants
//--------------------
const {GET_CURRENT_LOCATION} = constants;
const {width,height} = Dimensions.get("window");
const ASPECT_RATION = width/height;
const LATITUDE_DELTA= 0.0922;
const LONGITUDE_DELTA= ASPECT_RATION*LATITUDE_DELTA;

//--------------------
//Actions
//--------------------
export function getCurrentLocation(){
	alert("get current location")
	return(dispatch)=>{
		navigator.geolocation.getCurrentPosition(
			(position)=>{
				console.log("==========================",position)
				dispatch({
					type:GET_CURRENT_LOCATION,
					payload:position
				});
			},
			(error)=> console.log(error.message),
			{enableHighAccuracy: true, timeout: 50000, maximumAge:2000}
		);
	}
}

//--------------------
//Actions Handler
//--------------------
function handleGetCurrentLocation(state, action){
	return update(state, {
		region:{
			latitude:{
				$set:action.payload.coords.latitude
			},
			longitude:{
				$set:action.payload.coords.longitude
			},
			latitudeDelta:{
				$set:LATITUDE_DELTA
			},
			longitudeDelta:{
				$set:LONGITUDE_DELTA
			}
		}
	})
}

const initialState = {
	region:{},
};
const ACTION_HANDLERS = {
	GET_CURRENT_LOCATION:handleGetCurrentLocation,
}
export function HomeReducer (state = initialState, action){
	const handler = ACTION_HANDLERS[action.type];
	return handler ? handler(state, action) : state;
}
