var GreeterMessage = React.createClass({
  render: function(){
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

var GreeterForm = React.createClass({

  onFormSubmit(e){
	  e.preventDefault();
	 
	 var nameRef = this.refs.name;
	 var name = nameRef.value;
	 nameRef.value = '';
	 if(typeof name === 'string' && name.length >0){
  	   this.props.onNewName(name);
	 }

 },
  render(){
    return (
		<div>
 		  <form onSubmit={this.onFormSubmit}>
			<input type="text" ref="name"/>
			<button>Set Name</button>
		  </form>
		</div>
	);
  }
});


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
 	handleNewName(name){ 
		this.setState({name: name})
	},
	render(){
 	 var name = this.state.name;
	 var message = this.props.message;
	  return (
		<div>

		  <GreeterMessage name={name} message={message}/>

		  <GreeterForm onNewName={this.handleNewName} />


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








