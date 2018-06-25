import * as React from "react";
import * as ReactDOM from "react-dom";
import { HashRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import createHistory from "history/createBrowserHistory";
import registerServiceWorker from "./registerserviceworker";
import storeFun from "./store";
import Routes from "./routes";
const history = createHistory();
var store = storeFun(history);
const render = (Component: any) => {
	ReactDOM.render(
		<Provider store={store}>
			<Router>
				<Component />
			</Router>
		</Provider>,
		document.getElementById("root") as HTMLElement
	);
};
render(Routes);
registerServiceWorker();
