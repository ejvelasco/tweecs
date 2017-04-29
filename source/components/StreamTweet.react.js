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
	componentWillReceiveProps(nextProps) {
		console.log('[Tweecs] StreamTweet: 4. Running componentWillReceiveProps()'); 
		 
		let currentTweetLength = this.props.tweet.text.length; 
		let nextTweetLength = nextProps.tweet.text.length; 
		let isNumberOfCharactersIncreasing = (nextTweetLength > currentTweetLength); 
		let headerText; 
		 
		if (isNumberOfCharactersIncreasing) { 
			headerText = 'Number of characters is increasing'; 
		} else { 
		    headerText = 'Latest public photo from Twitter'; 
		} 
		 
		this.setState({ 
			numberOfCharactersIsIncreasing: isNumberOfCharactersIncreasing
		   	headerText: headerText 
		});  
		window.tweecs.numberOfReceivedTweets++; 	
	},
	shouldComponentUpdate(nextProps, nextState) {
		console.log('[Tweecs] StreamTweet: 5. Running shouldComponentUpdate()');
		return(nextProps.tweet.text.length > 1);
	},
	componentWillUpdate(nextProps, nextState) {
		console.log('[Tweecs] StreamTweet: 6. Running componentWillUpdate()');
	},
	componentDidUpdate(prevProps, prevState) {
		console.log('[Tweecs] StreamTweet: 7. Running componentDidUpdate()');
		window.tweecs.numberOfDisplayedTweets++;
	},
	componentWillUnmount() {
		delete window.tweecs;
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