import React from 'react';
import { connect } from 'react-redux';
import { fetchTodo, editTodo } from '../actions';
import TodoForm from './TodoForm';
import _ from 'lodash';
class TodoEdit extends React.Component {
	componentDidMount() {
		console.log(this.props);
		this.props.fetchTodo(this.props.match.params.id);
	}
	onSubmit = formValues => {
		console.log(formValues);
		this.props.editTodo(this.props.match.params.id, formValues);
	};
	render() {
		if (!this.props.todo) {
			return 'Loading...';
		}
		return (
			<div>
				<h3>Edit the todo</h3>
				<TodoForm
					initialValues={_.pick(this.props.todo, 'title', 'description')}
					onSubmit={this.onSubmit}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return { todo: state.todos[ownProps.match.params.id] };
};
export default connect(mapStateToProps, { fetchTodo, editTodo })(TodoEdit);
