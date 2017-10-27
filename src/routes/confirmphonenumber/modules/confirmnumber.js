import update from "react-addons-update";
import constants from "./actionsConstants";
const {CONFIRM_PHONE_NUMBER} = constants;
//--------------------
//Actions
//--------------------
export function ConfirmPhoneNumber(user){

	return(dispatch)=>{
          dispatch({
               type:CONFIRM_PHONE_NUMBER,
               payload:user
          });
	}
}

//--------------------
//Actions Handler
//--------------------
function handlelConfirmPhoneNumbe(state, action){
	return update(state, {
		user:{
			user:action.payload
          }

	})
}
const initialState = {
	addphonenumber:{},
};
const ACTION_HANDLERS = {
	CONFIRM_PHONE_NUMBER:handlelConfirmPhoneNumbe,
}
export function ConfirmPhonenumber(state = initialState, action){
	const handler = ACTION_HANDLERS[action.type];
	return handler ? handler(state, action) : state;
}
