import React from 'react';
import { Fragment } from 'react';
import Modal from '../components/Modal';
import { connect } from 'react-redux';
import { fetchTodo, deleteTodo } from '../actions';
import { Link } from 'react-router-dom';

class TodoDelete extends React.Component {
	componentDidMount() {
		this.props.fetchTodo(this.props.match.params.id);
	}
	renderActions() {
		const { id } = this.props.match.params;
		return (
			<Fragment>
				<div className='modal-footer'>
					<button
						onClick={() => this.props.deleteTodo(id)}
						className='btn btn-danger'>
						Delete
					</button>
					<Link to='/' className='btn btn-secondary'>
						Cancel
					</Link>
				</div>
			</Fragment>
		);
	}
	renderContent() {
		if (!this.props.stream) {
			return 'Are you sure you want to delete this task?';
		}
		return `Are you sure you want to delete the task with title: ${this.props.stream.title}`;
	}
	render() {
		return (
			<div>
				TodoDelete
				<Modal
					title='Delete Task'
					content={this.renderContent()}
					actions={this.renderActions()}
				/>
			</div>
		);
	}
}
const mapStateToProps = (state, ownProps) => {
	return {
		todo: state.todos[ownProps.match.params.id],
	};
};
export default connect(mapStateToProps, { fetchTodo, deleteTodo })(TodoDelete);
