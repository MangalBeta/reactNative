import update from "react-addons-update";
import constants from "./actionsConstants";
const {SIGNUP_USER_SUCCESSFULLY} = constants;
//--------------------
//Actions
//--------------------
export function signupUser(user){
	return(dispatch)=>{
		return  fetch("http://localhost:8085/api/users/login", {method: "POST", body:user})
        .then((response) => response.json())
        .then((responseData) => {
          console.log(responseData,"responseDataresponseData")
        })
        .done();
	}
}

//--------------------
//Actions Handler
//--------------------
function handlelsignupUser(state, action){
	return update(state, {
		user:{
			user:action.payload
          }

	})
}
const initialState = {
	user:{},
};
const ACTION_HANDLERS = {
	SIGNUP_USER_SUCCESSFULLY:handlelsignupUser,
}
export function SignupReducer (state = initialState, action){
	const handler = ACTION_HANDLERS[action.type];
	return handler ? handler(state, action) : state;
}
