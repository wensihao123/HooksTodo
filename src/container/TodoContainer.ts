import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IReduxState } from '../common/types';
import { toggleSwitch } from '../actions/UIAction';
import Todo from '../pages/Todo';

function mapStateToProps(state: IReduxState) {
	return {
		toggle: state.ui.toggle
	};
}

function mapDispatchToProps(dispatch: Dispatch) {
	return {
		toggleSwitch: () => dispatch(toggleSwitch())
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Todo);
