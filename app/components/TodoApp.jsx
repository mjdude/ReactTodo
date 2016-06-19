var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var TodoApp = React.createClass({
  getInitialState: function(){
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid() ,
          text: 'Walk the dog',
        },
        {
          id: uuid() ,
          text: 'Clean the yard',
        },
        {
          id: uuid() ,
          text: 'Complete React Tutorial',
        },
        {
          id: uuid() ,
          text: 'Call gf',
        }
      ],
    }
  },
  handleAddTodo: function(text){
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
        }
      ],
    });
  },

  handleSearch: function(showCompleted, searchText){
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase(),
    });
  },

  render: function(){
    var {todos} = this.state;
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}></TodoSearch>
        <TodoList todos={todos}></TodoList>
        <AddTodo onAddTodo={this.handleAddTodo}></AddTodo>
      </div>
    )
  },
});

module.exports = TodoApp;
