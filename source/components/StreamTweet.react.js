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
	componentWillMount() {
		console.log('[Tweecs] StreamTweet: 2. Running componentWillMount()');
		this.setState({
			numberOfCharactersIsIncreasing: true,
			headerText: 'Latest public photo from Twitter'
		});
		//remove in production - demo purposes only
		window.tweecs = {
			numberOfReceivedTweets: 1,
			numberOfDisplayedTweets: 1
		};
	},
	componentDidMount() {
		console.log('[Tweecs] StreamTweet: 3. Running componentDidMount()');
		let componentDOMRepresentation = ReactDOM.findDOMNode(this);
		window.tweecs.headerHtml = componentDOMRepresentation.children[0].outerHTML;
		window.snapterest.tweetHtml = componentDOMRepresentation.children[1].outerHTML;
	},
	componentWillUnmount() {
		delete window.tweecs;
	}
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