var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var {Provider} = require('react-redux');
// connected version (export default connect())
import TodoApp from 'TodoApp';
import Login from 'Login';

var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');

// --- functions for localStorage -- nolonger used
// store.subscribe(() => {
//   var state = store.getState();
//   console.log('New state ', state);
//   TodoAPI.setTodos(state.todos);
// });

// var initialTodos = TodoAPI.getTodos();
// store.dispatch(actions.addTodos(initialTodos));

store.dispatch(actions.startAddTodos());

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/">
        <Route path="todos" component={TodoApp}></Route>
        <IndexRoute component={Login}></IndexRoute>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
