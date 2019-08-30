import React from 'react';
import { IReduxState } from '../common/types';
import { useDispatch, useSelector } from 'react-redux';

const Todo = () => {
	const ui = useSelector((state: IReduxState) => state.ui);
	const dispatch = useDispatch();
	return (
		<div>
			<div>{JSON.stringify(ui)}</div>
			<input type="checkbox" checked={ui.toggle}  onChange={() => dispatch({type: 'toggle', value: !ui.toggle})} />
		</div>
	);
};

export default Todo;