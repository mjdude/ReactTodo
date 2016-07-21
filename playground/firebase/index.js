var firebase = require('firebase');

var config = {
  apiKey: "AIzaSyAXDwgqMQqknbH1amKke5pH3-HKcEj8Hfo",
  authDomain: "mo-todo-app.firebaseapp.com",
  databaseURL: "https://mo-todo-app.firebaseio.com",
  storageBucket: "",
};
firebase.initializeApp(config);

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

firebaseRef.update({
  'app/name': 'Todo Application',
  'user/name': 'JoStar',
}).then(() =>{
  console.log('sucessfully updated names');
}, () => {
  console.log('update failed');
});
