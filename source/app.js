const React = require('react'); 
const ReactDOM = require('react-dom'); 

const reactElement = React.createElement('h1', {className:'header'});
ReactDOM.render(reactElement, document.getElementById('react-application'));
