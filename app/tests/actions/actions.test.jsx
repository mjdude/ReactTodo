import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
var expect = require('expect');
import firebase , {firebaseRef} from 'app/firebase/';
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

    it('should generate UPDATE_TODO action', () => {
      var action = {
        type: 'UPDATE_TODO',
        id: '123',
        updates: {completed: false},
      };

      var res = actions.updateTodo(action.id, action.updates);

      expect(res).toEqual(action);
    });

    describe('Test with firebase Todos', () => {

      var testTodoRef;


      beforeEach((done) => {
        var todoRef = firebaseRef.child('todos');

        todoRef.remove().then(() => {
          testTodoRef = firebaseRef.child('todos').push();
          return testTodoRef.set({
            text: 'Something to do',
            completed: false,
            createdAt: 23453453
          });
        })
        .then(() => done())
        .catch(done);
      });

      afterEach((done) => {
        testTodoRef.remove().then(() => done());
      });

      it('should toggle todo and dispatch UPDATE_TODO action', (done) => {
        const store = createMockStore({});
        const action = actions.startToggleTodo(testTodoRef.key, true);

        store.dispatch(action).then(() => {
            const mockActions = store.getActions();

            expect(mockActions[0]).toInclude({
                type: 'UPDATE_TODO',
                id: testTodoRef.key
              });
            expect(mockActions[0].updates).toInclude({
              completed: true
            });

            expect(mockActions[0].updates.completedAt).toExist();

            done();
        }, done);
      });

      it('should populate todos and dipatch ADD_TODOS action', (done) => {
        const store = createMockStore({});
        const action = actions.startAddTodos();

        store.dispatch(action).then(() => {
          const mockActions = store.getActions();
          
          expect(mockActions[0].type).toEqual('ADD_TODOS');
          expect(mockActions[0].todos.length).toEqual(1);
          expect(mockActions[0].todos[0].text).toEqual('Something to do');

          done();
        }, done);

      });

    });
});
