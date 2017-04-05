var Greeter = React.createClass({

	render(){
	 // return (
	//	<div>
	//	 <h1>Hello React!</h1>
	//	 <p>This is from a component!</p>
	//	</div>
	//      );


	//return React.DOM.h1(null, "HELLO");

	return React.createElement('h1', null, "HELLO CREATE ELEMENT");

	 }
}); 



ReactDOM.render(
  <Greeter/>,
  document.getElementById('app')
);
