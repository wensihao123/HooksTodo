import store from '../store/store';

export const toggleSwitch = () => {
    console.log('check')
	return {
		type: 'toggle',
		value: !store.getState().ui.toggle
	};
};
