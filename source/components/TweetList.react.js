const React = require('react');
const Tweet = require('./Tweet.react.js');

const listStyle = {
	padding: '0'
};

const listItemStyle = {
	display: 'inline-block',
	listStyle: 'none'
};

const Tweetlist = React.createClass({
	getListOfTweetIds(){
		return Object.keys(this.props.tweets);
	},
	getTweetElement(tweetId){
		let tweet = this.props.tweets[tweetId];
		let handleRemoveTweetFromCollection = this.props.onRemoveTweetFromCollection;
		let tweetElement;
		if(handleRemoveTweetFromCollection){
			tweetElement = (
				<Tweet 
				    tweet={tweet} 
				    onImageClick={handleRemoveTweetFromCollection} /> 
			);
		} else{
			tweetElement = <Tweet tweet={tweet} />; 
		}
		return <li style={listItemStyle} key={tweet.id}>{tweetElement}</li>; 
	}, 
	render(){
		let tweetElements = this.getListOfTweetIds().map(this.getTweetElement);
		return(
			<ul style={listStyle}> 
			    {tweetElements} 
			</ul> 
		);
	}
});

module.exports = TweetList;