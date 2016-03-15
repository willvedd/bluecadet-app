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

var BCapp = React.createClass({displayName: "BCapp",
  getInitialState:function(){
    return {
      hightlight: false,
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

      	<Cadet person="Greg" status="is jetlagged"/>
      	<Cadet person="Putra" status="likes Iggy"/>
      	<Cadet person="Kat" status="luvs her cats"/>
      </div>
    );
  }
});

ReactDOM.render(
	<BCapp></BCapp>,
  	document.getElementById('app')
);