var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
  getInitialState: function(){
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: 1 ,
          text: 'Walk the dog',
        },
        {
          id: 2 ,
          text: 'Clean the yard',
        },
        {
          id: 3 ,
          text: 'Complete React Tutorial',
        },
        {
          id: 4 ,
          text: 'Call gf',
        }
      ],
    }
  },
  handleAddTodo: function(text){
    alert('new todo ' + text);
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
