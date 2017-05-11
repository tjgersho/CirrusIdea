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
	 var messageRef = this.refs.message;
	 var message = messageRef.value;
	 messageRef.value = '';
	var updates = {};

       var there_is_an_update = false;
	 if(typeof name === 'string' && name.length >0){
		updates.name = name;
		there_is_an_update = true;
	 }

	 if(typeof message === 'string' && message.length > 0){
		updates.message = message;
		there_is_an_update = true;

	 }
   if(there_is_an_update){
		this.props.onUpdates(updates);
	}
 },
  render(){
    return (
		<div>
 		  <form onSubmit={this.onFormSubmit}>
			<input type="text" ref="name" placeholder="Enter Name"/><br />
			<textarea ref="message" placeholder="Enter A Greeting"/><br />
			<button>Submit</button>
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
			name: this.props.name,
			message: this.props.message
		};
       },
 	handleUpdates(obj){ 
		this.setState(obj);
	},
	render(){
 	 var name = this.state.name;
	 var message = this.state.message;
	  return (
		<div>

		  <GreeterMessage name={name} message={message}/>

		  <GreeterForm onUpdates={this.handleUpdates} />


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








