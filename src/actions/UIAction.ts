import store from '../store/store';

export const toggleSwitch = () => {
	return {
		type: 'toggle',
		value: !store.getState().ui.toggle
	};
};
