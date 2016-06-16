var React = require('react');

var AddTodo = React.createClass({
  onSubmit: function(e){
    e.preventDefault();
    var text = this.refs.todoText.value;
    this.props.onAddTodo(text);
  },

  render: function(){
    var {text, id} = this.props;

    return(
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" ref="todoText" placeholder="What do you need to do?"></input>
          <button className="button expanded" >Add Todo</button>
        </form>
      </div>
    )
  }
});

module.exports = AddTodo;
