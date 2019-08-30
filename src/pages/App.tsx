import React from 'react';
import Todo from '../container/TodoContainer';
import TodoH from '../pages/TodoH';

export default class App extends React.Component {
	public render() {
		return (
			<div>
				<Todo />
				<TodoH />
			</div>
		);
	}
}
