import { connect } from "react-redux";
import Root from "../components/";
import * as actions from "../controls/actions";
interface HomeData {
	home: any;
}
export default connect(
	(homeData: HomeData) => ({ code: homeData.home.code }),
	{
		...actions
	}
)(Root);
