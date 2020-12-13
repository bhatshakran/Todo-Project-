import React from 'react';

import { connect } from 'react-redux';
import { fetchTodo } from '../actions';
class TodoShow extends React.Component {
	componentDidMount() {
		const { id } = this.props.match.params;
		this.props.fetchTodo(id);
	}

	render() {
		if (!this.props.todo) {
			return <div>Loading...</div>;
		}
		const { title, description } = this.props.todo;
		return (
			<React.Fragment>
				<h1>{title}</h1>
				<h5>{description}</h5>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return { todo: state.todos[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchTodo })(TodoShow);
