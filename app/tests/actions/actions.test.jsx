import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
var expect = require('expect');

var actions = require('actions');

var createMockStore = configureMockStore([thunk]);

describe('Actions', () => {
    it('should generate search text action', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'some search text',
      };

      var res = actions.setSearchText(action.searchText);

      expect(res).toEqual(action);

    });

    it('should generate addtodo function', () => {
      var action = {
        type: 'ADD_TODO',
        todo: {
          id: '123',
          text: 'go running',
          completed: false,
          createdAt: 1231231,
        },
      };

      var res = actions.addTodo(action.todo);

      expect(res).toEqual(action);
    });

    // done lets us test for asynchon calls, continue to listen until done
    // done needs to be called after the assertions otherwise test will fail
    // done tells karma to stop listening
    it('should create todo and dispatch ADD_TODO', (done) => {
      const store = createMockStore({});
      const todoText = 'My todo item';

      store.dispatch(actions.startAddTodo(todoText)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toInclude({
          type: 'ADD_TODO'
        });
        expect(actions[0].todo).toInclude({
          text: todoText
        });
        done();
      }).catch(done);
    });

    it('shoud generate ADD_TODOS actions object', () => {
      var todos = [{
        id: '111',
        text: 'anything',
        completed: false,
        completedAt: undefined,
        createdAt: 33000,
      }];

      var action = {
        type: 'ADD_TODOS',
        todos
      }

      var res = actions.addTodos(todos);

      expect(res).toEqual(action);
    });

    it('should generate toggle show completed', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED',
      };

      var res = actions.toggleShowCompleted();

      expect(res).toEqual(action);
    });

    it('should generate toggle todo', () => {
      var action = {
        type: 'TOGGLE_TODO',
        id: '123',
      };

      var res = actions.toggleTodo(action.id);

      expect(res).toEqual(action);
    })
});
