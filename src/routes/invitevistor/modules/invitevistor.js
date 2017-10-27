import update from "react-addons-update";
import constants from "./actionsConstants";
const {INVITE_YOYR_VISITOR} = constants;
//--------------------
//Actions
//--------------------
export function inviteVistor(user){
	return(dispatch)=>{
          dispatch({
               type:INVITE_YOYR_VISITOR,
               payload:user
          });
	}
}

//--------------------
//Actions Handler
//--------------------
function handlelInviteVistor(state, action){
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
	INVITE_YOYR_VISITOR:handlelInviteVistor,
}
export function InviteVisitor(state = initialState, action){
	const handler = ACTION_HANDLERS[action.type];
	return handler ? handler(state, action) : state;
}
