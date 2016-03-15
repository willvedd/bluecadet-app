var React = require('react');
var ReactDOM = require('react-dom');


var Cadet = React.createClass({displayName: "Cadet",
	getDefaultProps:function(){
		return {
			person: 'Kat',
			status: 'is busy',
		}
	},
	render: function() {
		return(
			<div className="cadet">
				<h2>{this.props.person} {this.props.status}</h2>
			</div>
		)
	},
});



var AppForm = React.createClass({displayName: "AppForm",
	getDefaultProps:function(){
		return {
			activeTitle: "",
		}
	},
	render: function() {
		return(
			<input type="text" onChange={(e)=>this.props._onChange(e)} value={this.props.activeTitle}/>
		)
	},
});

var BCapp = React.createClass({displayName: "BCapp",
  getInitialState:function(){
    return {
      hightlight: false,
      appTitle: "Bluecadet App",
      staff: [
      	{
      		person: "Kat",
      		status: "luvs her cats",
      		strikeThrough: false,
      	},
      	{
      		person: "Mark",
      		status: "is busy",
      		strikeThrough: false,
      	},
      	{
      		person: "Greg",
      		status: "is working from home with Zeta",
      		strikeThrough: false,
      	}
      ]
    }
  },

  toggleState:function(){
	this.setState({
  		hightlight: !this.state.hightlight,
  	});
  },

  isHighlighted:function(){
  	return (this.state.hightlight == true);
  },

  changeAppTitle:function(e){
  	this.setState({
  		appTitle: e.target.value,
  	})
  },

  render: function() {
  	var self = this;
  	console.log("render",this.state);

    return (
      <div>
      	<h1 className={self.isHighlighted() ? 'highlighted' :''}><i>The</i> Official {this.state.appTitle}</h1>
      	<button onClick={()=>self.toggleState()}>{self.isHighlighted()?  'Unhighlight':'Highlight'}</button>
      	{
      		self.state.staff.map(function(employee){
      			return (
      				<Cadet key={"person-"+employee.person} person={employee.person} status={employee.status}/>
      			)
      		})
      	}
      	<AppForm _onChange={this.changeAppTitle} activeTitle={this.state.appTitle}/>
      </div>
    );
  }
});

ReactDOM.render(
	<BCapp></BCapp>,
  	document.getElementById('app')
);