var React = require('react');

var AddTodo = React.createClass({
  onSubmit: function(){

  },
  render: function(){
    var {text, id} = this.props;

    return(
      <div>
        <form onSubmit={this.onSubmit}>

        </form>
      </div>
    )
  }
});

module.exports = AddTodo;
