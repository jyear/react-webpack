import { handleActions } from "redux-actions";
import { CODE } from "./actions";

export const code = handleActions(
	{
		[CODE]: (state: any, { payload }: any) => payload
	},
	{
		name: "大苏打撒旦"
	}
);
