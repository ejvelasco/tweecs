const React = require('react'); 
const ReactDOM = require('react-dom'); 


const ReactClass = React.createClass({
	getInitialState() {
		return{
			isHidden: false, 
			title: 'Stateful React Component'
		};
	},
	handleClick(){
		this.setState({
			isHeaderHidden: !this.state.isHeaderHidden
		});
	},
	render() {
		const headerElement = React.createElement('h1', { className: 'header', key: 'header' }, this.state.title); 
		const buttonElement = React.createElement('button', { className: 'btn btn-default', onClick: this.handleClick, key: 'button' }, 'Toggle header'); 
		if (this.state.isHeaderHidden) { 
			return React.createElement('div', null, [ buttonElement ]); 
		}   
		return React.createElement('div', null, [ buttonElement, headerElement ]); 
	}
});
const reactComponentElement = React.createElement(ReactClass);
ReactDOM.render(reactComponentElement, document.getElementById('react-application'));
