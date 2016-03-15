var React = require('react');
var ReactDOM = require('react-dom');


var BCapp = React.createClass({displayName: "BCapp",
  getInitialState:function(){
    return {
      hightlight: false,
    }
  },

  render: function() {
  	var self = this;
  	console.log("render",this.state);
    return (
      <div>
      	<h1 className={'highlighted'}><i>The</i> Official Bluecadet App</h1>
      </div>
    );
  }
});

ReactDOM.render(
	<BCapp></BCapp>,
  	document.getElementById('app')
);