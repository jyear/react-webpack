import { injectReducer } from "../../utils/injectReducer";
import * as reducers from "./controls/reducers";
injectReducer("home", reducers);
import Root from "./containers/root";
export default Root;
