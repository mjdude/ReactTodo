var React = require('react');
var ReactDom = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var AddTodo = require('AddTodo');

describe('Todo', () => {

  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  it('should call alert if text is entered', () => {
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}></AddTodo>);

    var $el = $(ReactDom.findDOMNode(addTodo));

    addTodo.refs.todoText.value = "test task";
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toHaveBeenCalledWith("test task");
  })

});
