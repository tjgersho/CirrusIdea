var React = require('react');
var ReactDOM = require('react-dom');

var objOne = {name: "Travis", location: "Denver"};

var objTwo = {
 age: 25,
 ...objOne
};

console.log(objTwo);


ReactDOM.render(
  <h1>Boilerplate asdasdfasdf app!</h1>,
  document.getElementById('app')
);
