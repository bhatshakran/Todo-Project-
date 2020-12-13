import todos from '../apis/todos';
import history from '../components/history';
export const SignIn = userId => {
	return {
		type: 'SIGN_IN',
		payload: userId,
	};
};

export const SignOut = () => {
	return {
		type: 'SIGN_OUT',
	};
};

export const createTodo = formValues => {
	return async (dispatch, getState) => {
		const { userId } = getState().auth;
		const response = await todos.post('/todos', { ...formValues, userId });
		dispatch({ type: 'CREATE_TODO', payload: response.data });
		history.push('/');
	};
};

export const fetchTodos = () => {
	return async dispatch => {
		const response = await todos.get('/todos');
		dispatch({ type: 'FETCH_TODOS', payload: response.data });
	};
};

export const fetchTodo = id => {
	return async dispatch => {
		const response = await todos.get(`/todos/${id}`);
		dispatch({ type: 'FETCH_TODO', payload: response.data });
	};
};

export const deleteTodo = id => {
	return async dispatch => {
		await todos.delete(`/todos/${id}`);
		dispatch({ type: 'DELETE_TODO', payload: id });
		history.push('/');
	};
};

export const editTodo = (id, formValues) => {
	return async dispatch => {
		const response = await todos.patch(`/todos/${id}`, formValues);
		dispatch({ type: 'EDIT_TODO', payload: response.data });
		history.push('/');
	};
};
