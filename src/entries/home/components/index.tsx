import * as React from "react";
interface defaultState {
	name1: string;
}
interface Props {
	code: any;
}
class App extends React.Component<Props, defaultState> {
	state = {
		name1: "张三"
	};
	render() {
		const { code } = this.props;
		return <div>222{code.name}</div>;
	}
}
export default App;
