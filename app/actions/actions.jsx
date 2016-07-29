import moment from 'moment';
import firebase , {firebaseRef} from 'app/firebase/';
var _ = require('underscore');

export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  };
};

export var toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED',
  }
};

export var addTodo = (todo)=> {
  return {
    type: 'ADD_TODO',
    todo
  };
};

export var addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos
  };
};

export var startAddTodos = () => {
  return (dispatch, getState) => {
    var todosRef = firebaseRef.child('todos');
    var todos =[];
    var data = todosRef.once("value", (snap) => {
      debugger;

      // var original = {a:1, b:2, c:3};
      // var squaredValues = _.object(_.map(original, function (value, key) {
      //   return [key, value * value];
      // }));

      var res = _.object(_.map(snap.val(), (value, key) => {
        var todo = {
          id: key,
          ...value,
        };
        todos.push(todo);
      }));

      debugger;
  });
  };
};

export var startAddTodo = (text) => {
  return (dispatch, getState) => {
    var todo = {
      text,
      completed: false,
      createdAt: moment().unix(),
      completedAt:null
    };

    var todoRef = firebaseRef.child('todos').push(todo);

    return todoRef.then(() => {
      dispatch(addTodo({
        ...todo,
        id: todoRef.key,
      }));
    } );
  };
};

export var updateTodo = (id , updates) => {
  return {
    type: 'UPDATE_TODO',
    id,
    updates,
  };
};

// we need the id , to locate the todo and the property to change , in this case,
// it is completed property

export var startToggleTodo = (id, completed ) => {
  return (dispatch, getState) => {
    //ES5 version
    // var todoRef = firebaseRef.child('todos/' + id);

    // ES6 version
    var todoRef = firebaseRef.child(`todos/${id}`);
    var updates = {
      completed,
      completedAt: completed ? moment().unix() : null,
    };
    return todoRef.update(updates).then(() => {
      dispatch(updateTodo(id , updates));
    });
  };
};
