import { connect } from "react-redux";
import Signup from "../components/signup";
import {signupUser} from "../modules/signup";

const mapStateToProps = (state) => ({
	user: state.signup.user,
});
const mapActionsCreators = {
     signupUser
};

export default connect(mapStateToProps,mapActionsCreators)(Signup)
