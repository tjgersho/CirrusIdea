var GreeterMessage = React.createClass({
  render: function(){
	return (
		<div>
			<h1>Some H1</h1>
		       <p>Some P tag</p>
		</div>
	);
   }
});

var GreeterForm = React.createClass({
 render: ()=>{
   return (
		<div>
 		  <form>

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
	onButtonClick(e){
	  e.preventDefault();
	 
	 var nameRef = this.refs.name;
	 var name = nameRef.value;
	 nameRef.value = '';
	 if(typeof name === 'string' && name.length >0){
  	   this.setState({name: name});
	 }

	},
	render(){
 	 var name = this.state.name;
	 var message = this.props.message;
	  return (
		<div>
		 <h1>Hello {this.state.name}!</h1>
		 <p>{message + "!!"}</p>

		 <GreeterMessage name={name} message={message}/>

		  <form onSubmit={this.onButtonClick}>

			<input type="text" ref="name"/>
			<button>Set Name</button>

		  </form>

		  <GreeterForm />


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








