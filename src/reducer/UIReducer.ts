import { AnyAction } from 'redux';
import { IUIState } from '../common/types';

export const initialState: IUIState = {
	toggle: false
};

export function uiReducer(state: IUIState = initialState, action: AnyAction): IUIState {
	switch (action.type) {
		case 'toggle':
			return Object.assign({}, state, {
				toggle: action.value
			});
		default:
			return state;
	}
}
