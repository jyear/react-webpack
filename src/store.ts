import { routerMiddleware, routerReducer } from "react-router-redux";
import { applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore } from "./utils/injectReducer";
import thunkMiddleware from "./middlewares/thunk";
import promiseMiddleware from "./middlewares/promise";

const middlewareList = [thunkMiddleware, promiseMiddleware];

function store(history: any): any {
	return createStore(
		{
			routing: routerReducer
		},
		compose(
			applyMiddleware(routerMiddleware(history), ...middlewareList),
			composeWithDevTools()
		)
	);
}
export default store;
