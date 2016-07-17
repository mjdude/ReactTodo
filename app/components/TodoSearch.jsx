var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var TodoSearch = React.createClass({
  render: function(){
    var {dispatch, showCompleted, searchText} = this.props;
    return (
      <div className="container__header">
        <div>
          <input type="search" ref="searchText" placeholder="Search Todos" value={searchText} onChange={() => {
                var searchText = this.ref.searchText.value;
                dispatch(actions.setSearchText(searchText));
            }}></input>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" checked={showCompleted} onChange={() => {
                dispatch(actions.toggleShowCompleted());
              }}></input>
            Show completed todos
          </label>
        </div>
      </div>
    );
  },
});

export default connect(
  (state) => {
    return {
      showCompleted: state.showCompleted,
      searchText: state.searchText
    }
  })(TodoSearch);
