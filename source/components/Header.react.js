const react = require('react');

const headerStyle = {
	fontSize: '16px',
	fontWeight: '300',
	display: 'inline-block',
	margin: '20px 10px'
};

const header = React.createClass({
	getDefaultProps() { 
		return{
			text: 'Default Header'
		};
	},
	render(){
		return{
			<h2 style={headerStyle}>{this.props.text}</h2> 
		};
	}
});

module.exports = Header;