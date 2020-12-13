import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import TodoCreate from '../todos/TodoCreate';
import TodoEdit from '../todos/TodoEdit';
import TodoShow from '../todos/TodoShow';
import TodoList from '../todos/TodoList';
import TodoDelete from '../todos/TodoDelete';
import Header from './Header';
import history from './history';

class App extends React.Component {
	render() {
		return (
			<div>
				<Router history={history}>
					<Header />
					<Switch>
						<Route path='/' exact component={TodoList} />
						<Route path='/todos/new' exact component={TodoCreate} />
						<Route path='/todos/edit/:id' exact component={TodoEdit} />
						<Route path='/todos/:id' exact component={TodoShow} />
						<Route path='/todos/delete/:id' exact component={TodoDelete} />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
