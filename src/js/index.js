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


var CadetForm = React.createClass({displayName: "CadetForm",
	getDefaultProps:function(){
		return {
			person: '',
			status: '',
		}
	},
	render: function() {
		return(
			<div className="cadet">
				<input placeholder="Name"/>
				<input placeholder="Status"/>
				<button>Add Cadet</button>
			</div>
		)
	},
});


var BCapp = React.createClass({displayName: "BCapp",
  getInitialState:function(){
    return {
      hightlight: false,
      staff: [
      	{
      		person: "Kat",
      		status: "luvs her cats",
      	},
      	{
      		person: "Mark",
      		status: "is busy",
      	},
      	{
      		person: "Greg",
      		status: "is working from home with Zeta",
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

  render: function() {
  	var self = this;
  	console.log("render",this.state);

    return (
      <div>
      	<h1 className={self.isHighlighted() ? 'highlighted' :''}><i>The</i> Official Bluecadet App</h1>
      	<button onClick={()=>self.toggleState()}>{self.isHighlighted()?  'Unhighlight':'Highlight'}</button>
      	{
      		self.state.staff.map(function(employee){
      			return (
      				<Cadet key={"person-"+employee.person} person={employee.person} status={employee.status}/>
      			)
      		})
      	}
      	<CadetForm />
      </div>
    );
  }
});

ReactDOM.render(
	<BCapp></BCapp>,
  	document.getElementById('app')
);