const React = require('react');
const ReactDOM = require('react-dom');
const Header = require('./Header.react');
const Tweet = require('./Tweet.react');

const StreamTweet = React.createClass({
	getInitialState() {
		console.log('[Tweecs] StreamTweet: 1.Running getInitialState()');
		return{
			numberOfCharactersIsIncreasing: null,
			headerText: null
		};
	},
	render(){
		console.log('[Tweecs] StreamTweet: Running render()');
		return{
			<section> 
			    <Header text={this.state.headerText} /> 
			    <Tweet 
			      tweet={this.props.tweet} 
			      onImageClick={this.props.onAddTweetToCollection} /> 
			</section> 
		};
	}
});

module.exports = StreamTweet;