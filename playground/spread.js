// function add (a, b){
//   return a + b;
// }
//
// console.log(add(3,1));
//
// var toAdd = [9, 5];
//
// console.log(add(...toAdd));

var person = ['Mo', 30];
var person2 = ['Jo', 29];

function msg (name , age){
  return 'Hi ' + name + ' you are ' + age;
}

console.log(msg(...person));


var names = ['abe', 'clarissa'];
var final = ['Didi', ...names];

function printName (a){
  a.forEach(function(name){
    return console.log('Hi ' + name);
  });
}

// or you could simply
//
// final.forEach(function (name){
//   console.log('Hi ' + name);
// }

printName(final);
