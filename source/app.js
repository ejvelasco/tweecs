const React = require('react'); 
const ReactDOM = require('react-dom'); 

const list = <ul className='list'>
	<li className="item-1">Item 1</li>
	<li className="item-2">Item 2</li>
	</ul>;

const ReactClass = React.createClass({
	render() {
		return React.createElement('h1', {className:'header'}, 'React Component');
	}
});
const reactComponentElement = React.createElement(ReactClass);
ReactDOM.render(reactComponentElement, document.getElementById('react-application'));
