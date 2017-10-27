import update from "react-addons-update";
import constants from "./actionsConstants";
const {ADD_PHONE_NUMBER} = constants;
//--------------------
//Actions
//--------------------
export function addPhoneNumber(user){

	return(dispatch)=>{
          dispatch({
               type:ADD_PHONE_NUMBER,
               payload:user
          });
	}
}

//--------------------
//Actions Handler
//--------------------
function handlelAddNumber(state, action){
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
	ADD_PHONE_NUMBER:handlelAddNumber,
}
export function Addphonenumber(state = initialState, action){
	const handler = ACTION_HANDLERS[action.type];
	return handler ? handler(state, action) : state;
}
