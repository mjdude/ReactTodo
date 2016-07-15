var React = require('react');
var ReactDom = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');
var {Provider} = require('react-redux');

import configure from 'configureStore';
import ConnectedTodoList, {TodoList} from 'TodoList';
import ConnectedTodo, {Todo} from 'Todo';

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render one todo component for each todo item', () => {
    var todos = [
    {
      id: 1,
      text: 'Do something',
      completed: false,
      completedAt: undefined,
      createdAt: 500,
    },
    {
      id: 2,
      text: 'Check now',
      completed: false,
      completedAt: undefined,
      createdAt: 500,
    },
  ];

  var store = configure({
    todos
  });

  var provider = TestUtils.renderIntoDocument(
    <Provider store={store}>
        <ConnectedTodoList></ConnectedTodoList>
    </Provider>
  );
  var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0]
  var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);

  expect(todosComponents.length).toBe(todos.length);

  })

  it('should render empty message if no todos', () => {
    var todos = [];

  var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}></TodoList>)
  var $el =$(ReactDom.findDOMNode(todoList));
  expect($el.find('.container__message').length).toBe(1);

  })

});
