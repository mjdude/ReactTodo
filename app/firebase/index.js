var firebase = require('firebase');

try {
  var config = {
    apiKey: "AIzaSyAXDwgqMQqknbH1amKke5pH3-HKcEj8Hfo",
    authDomain: "mo-todo-app.firebaseapp.com",
    databaseURL: "https://mo-todo-app.firebaseio.com",
    storageBucket: "",
  };
  firebase.initializeApp(config);
} catch (e){

}
// BASIC CRUD operations, .set -> create , .update -> update , .remove -> delete

export var firebaseRef = firebase.database().ref();

export default firebase;
