var Greeter = React.createClass({
	getDefaultProps: function(){
		return {
			name: 'React',
			message: 'COOOOOOOOOl'
		};
	},
	render(){
 	 var name = this.props.name;
	 var message = this.props.message;
	  return (
		<div>
		 <h1>Hello {name}!</h1>
		 <p>{message}</p>
		</div>
	      );

	 }
}); 


var name = "TRaVIS"
var message = "HEY HEY HEY";

ReactDOM.render(
  <Greeter name={name} message={message}/>,
  document.getElementById('app')
);
