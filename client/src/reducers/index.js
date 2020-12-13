import { combineReducers } from 'redux';
import { reducer } from 'redux-form';
import { AuthReducer } from './AuthReducer';
import { todosReducer } from './todoReducer';
export default combineReducers({
	auth: AuthReducer,
	form: reducer,
	todos: todosReducer,
});
