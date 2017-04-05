var Greeter = React.createClass({
	getDefaultProps(){
		return {
			name: 'React',
			message: 'COOOOOOOOOl'
		};
	},
	getInitialState() {
    		return { 
			name: this.props.name 
		};
       },
	onButtonClick(e){
	  e.preventDefault();
	  var name = this.refs.name.value;
	  this.setState({name: name});
	},
	render(){
 	 var name = this.state.name;
	 var message = this.props.message;
	  return (
		<div>
		 <h1>Hello {this.state.name}!</h1>
		 <p>{message + "!!"}</p>

		  <form onSubmit={this.onButtonClick}>

			<input type="text" ref="name"/>
			<button>Set Name</button>

		  </form>
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
