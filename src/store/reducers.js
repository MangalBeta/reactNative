import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';
import { HomeReducer as home } from "../routes/home/modules/home";
import { SignupReducer as signup } from "../routes/signup/modules/signup";
import { Addphonenumber as addphonenumber } from "../routes/addphonenumber/modules/addphonenumber";
export const makeRootReducer = () => {
	return combineReducers({
		 form: formReducer,
		home,
		signup,
		addphonenumber
	});
}

export default makeRootReducer;
