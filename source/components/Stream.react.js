const React = require('react');
const SnapkiteStreamClient = require('snapkite-stream-client');
const Streamtweet = require('./StreamTweet.react');
const Header = require('./Header.react');

const Stream = React.createClass({
	getInitialState() {
		return{
			tweet: null
		}
	},
	componentDidMount() {
		SnapkiteStreamClient.initializeStream(this.handleNewTweet);
	}, 
	componentWillUnmount() {
		SnapkiteStreamClient.destroyStream();
	},
	handleNewTweet: function(tweet){
		this.setState({
			tweet: tweet
		});
	},
	render(){
		let tweet = this.state.tweet;
		if(tweet){
			return( 
				<StreamTweet tweet={tweet} onAddTweetToCollection={this.props.onAddTweetToCollection} /> 
			);
		}
		return (
			<Header text="Waiting for public photos from Twitter..." /> 
		);
	}
});

module.exports = Stream;	