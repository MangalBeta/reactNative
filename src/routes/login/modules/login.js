import update from "react-addons-update";
import constants from "./actionsConstants";
const {LOGING_USER_SUCCESSFULLY} = constants;
//--------------------
//Actions
//--------------------
export function loginUser(user){
	alert("get current location")
	return(dispatch)=>{
          dispatch({
               type:LOGING_USER_SUCCESSFULLY,
               payload:user
          });
	}
}

//--------------------
//Actions Handler
//--------------------
function handleloginUser(state, action){
	return update(state, {
		loginuser:{
			user:action.payload
          }

	})
}
const initialState = {
	loginuser:{},
};
const ACTION_HANDLERS = {
	LOGING_USER_SUCCESSFULLY:handleloginUser,
}
export function HomeReducer (state = initialState, action){
	const handler = ACTION_HANDLERS[action.type];
	return handler ? handler(state, action) : state;
}
