var firebase = require('firebase');

var config = {
  apiKey: "AIzaSyAXDwgqMQqknbH1amKke5pH3-HKcEj8Hfo",
  authDomain: "mo-todo-app.firebaseapp.com",
  databaseURL: "https://mo-todo-app.firebaseio.com",
  storageBucket: "",
};
firebase.initializeApp(config);

// BASIC CRUD operations, .set -> create , .update -> update , .remove -> delete

var firebaseRef = firebase.database().ref();
firebaseRef.set({
  app: {
    name: 'todo app',
    version: '1.0',
  },
  isRunning: true,
  user: {
    name: 'Mo',
    age: 23,
  },
});

// firebaseRef.update({
//   isRunning: false,
//   'app/name': 'Todo Application',
// });

// firebaseRef.child('app').update({
//   name: 'Todo Application',
// }).then(() => {
//   console.log('update worked');
// }, (e) => {
//   console.log('update failed');
// });

//challange solution 1, multipath update
// firebaseRef.update({
//   'app/name': 'Todo Application',
//   'user/name': 'JoStar',
// }).then(() =>{
//   console.log('sucessfully updated names');
// }, () => {
//   console.log('update failed');
// });

//challange solution 2, using child
// firebaseRef.child('app').update({
//   name: 'Todo Application',
// }).then(() => {
//   console.log('updated app name');
// }, (e) => {
//   console.log('failed to update app name');
// });
//
//
// firebaseRef.child('user').update({
//   name: 'Pluto',
// });

// remove challange solution 1 , using null and update
//
// firebaseRef.update({
//   isRunning: null
// });
//
// firebaseRef.child('user/age').remove();


// Read ( from CRUD), once and on are listensers , they isten for changes.
// once can only be called once. 'on' continues to listen for changes, and can be durned off
// with the 'off' command

// all data (using once method)
// firebaseRef.once('value').then((snapshot) => {
//   console.log('got entire database', snapshot.val());
// },(e) => {
//   console.log('unable to get dat from database');
// });

// child, when getting child you canalso get the key
// firebaseRef.child('app').once('value').then((snapshot) => {
//   console.log('got entire ', snapshot.key,snapshot.val());
// },(e) => {
//   console.log('unable to get dat from database');
// });

// ------------- Listners
// listening to changes in database (method is called on), off() switches off the listener
// firebaseRef.on('value', (snapshot) => {
//  console.log('got value ', snapshot.val());
// });
//
// // this turns off all listensers,
// firebaseRef.off();
//
// firebaseRef.update({ isRunning: false});

// put callback into a variable , to use multiple listensers

// var logData = (snapshot) => {
//  console.log('got value ', snapshot.val());
// };
//
// firebaseRef.on('value', logData );
//
// // this turns off all listensers,
// firebaseRef.off('value', logData);
//
// firebaseRef.update({ isRunning: false});


// Challange , create listener for user and NOT for app
//
// var  logData = (snapshot) => {
//   console.log('Updated ', snapshot.val());
// };
// firebaseRef.child('user').on('value', logData );
//
// firebaseRef.child('user').update({ name: 'MJ'});
// firebaseRef.child('app').update({ name: 'New App Name'});

// ARRAYS !!

// challange

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('New todo added ', snapshot.key, snapshot.val());
});

todosRef.on('child_changed', (snapshot) => {
  console.log('todo changed', snapshot.key , snapshot.val());
});

todosRef.on('child_removed', (snapshot) => {
  console.log('todo removed', snapshot.key , snapshot.val());
});

var todo1 = todosRef.push({
  text: 'walk the dog',
});
todosRef.push({
  text: 'go to sleep',
});

// example update to todo
todo1.update({text: 'talk to dog'});

//example remove todo
todo1.remove();
