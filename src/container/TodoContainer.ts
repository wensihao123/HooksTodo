import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IUIState } from '../common/types';
import { toggleSwitch } from '../actions/UIAction';
import Todo from '../pages/Todo';

function mapStateToProps(state: IUIState) {
	return {
		toggle: state.toggle
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
