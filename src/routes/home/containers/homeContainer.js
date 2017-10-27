import { connect } from "react-redux";
import Home from "../components/home";
import {getCurrentLocation} from "../modules/home";

const mapStateToProps = (state) => ({
	region: state.home.region,
});
const mapActionsCreators = {
     getCurrentLocation
};

export default connect(mapStateToProps,mapActionsCreators)(Home)
