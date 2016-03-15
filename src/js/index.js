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

	getInitialState:function(){
		return {
			name: '',
			status: '',
		}
	},

	setName:function(e){
		this.setState({
			name: e.target.value,
		})
	},

	setStatus:function(e){
		this.setState({
			status: e.target.value,
		})
	},

	_submit:function(){
		this.props.submitCadet(this.state.name,this.state.status);
		this.setState({
			status: '',
			name: '',
		});
	},

	render: function() {
		return(
			<div className="cadet">
				<input onChange={(e)=>this.setName(e)} ref="input-name" placeholder="Name"/>
				<input onChange={(e)=>this.setStatus(e)} ref="input-status" placeholder="Status"/>
				<button onClick={()=>this._submit()}>Add Cadet</button>
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

  submitCadet:function(newName,newStatus){
  	this.setState({
  		staff: this.state.staff.concat([{
	  		person: newName,
	  		status: newStatus,
  		}]),
  	});
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
      	<CadetForm submitCadet={this.submitCadet}/>
      </div>
    );
  }
});

ReactDOM.render(
	<BCapp></BCapp>,
  	document.getElementById('app')
);