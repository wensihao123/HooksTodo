import React from 'react';
import '../css/App.css';
interface IProps {
	toggle: boolean;
	toggleSwitch: () => void;
}

export default class Todo extends React.Component<IProps> {
	public render = () => {
		const { toggle, toggleSwitch } = this.props;
		console.log(this.props)
		return (
			<div>
				<div>{toggle ? 'True' : 'False'}</div>
				<input type="checkbox" value={toggle ? 'true' : 'false'} onChange={toggleSwitch} />
			</div>
		);
	};
}
