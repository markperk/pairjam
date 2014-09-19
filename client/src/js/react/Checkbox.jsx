var React = require('react');
var Switchery = require('../../../bower_components/switchery/switchery.js');

var Checkbox = React.createClass({
	getInitialState: function() {
		return {};
	},

	componentDidMount: function() {
		var domNode = this.getDOMNode();
		this.switchery = new Switchery(domNode, {color: '#53d76a'});
		domNode.onchange = this.props.handleChange;
	},

	componentWillReceiveProps: function(nextProps) {
		if (nextProps.checked !== this.props.checked) {
			this.switchery.setPosition();
		}
	},

	render: function() {
		return (
			// onChange will never be triggered, this is just to make React stfu
			<input type="checkbox" checked={this.props.checked} onChange={function(){}} />
		);
	}
});

module.exports = Checkbox;
