var React = require('react');
var ReactDom = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should add todo to the todo state on handle addTodo',() => {
    var text = 'test text';
    var todoApp = TestUtils.renderIntoDocument(<TodoApp></TodoApp>);
    todoApp.setState({
      todos: [],
    });

    todoApp.handleAddTodo(text);

    expect(todoApp.state.todos[0].text).toBe(text);
  });

  it('should toggle completed value when  handletoggle  called', () => {
    var todo = {
      id: 11,
      text: 'test features',
      completed: false
    };

    var todoApp = TestUtils.renderIntoDocument(<TodoApp></TodoApp>);

    todoApp.setState({
      todos: [todo],
    });

    expect(todoApp.state.todos[0].completed).toBe(false);
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(true);


  });
});
