const React = require('react');
const Stream = require('./Stream.react');
const Collection = require('./Collection.react');

const Application = React.createClass({
	getInitialState() {
		return{
			collectionTweets: {}
		};
	}, 
	addTweetToCollection(tweet){
		let collectionTweets = this.state.collectionTweets;
		collectionTweets[tweet.id] = tweet;
		this.setState({
			collectionTweets: collectionTweets
		});
	},
	removeTweetFromCollection(tweet){
		let collectionTweets = this.state.collectionTweets;
		delete collectionTweets[tweet.id];
		this.setState({
			collectionTweets: collectionTweets
		});
	},
	removeAllTweetsFromCollection(){
		this.setState({
			collectionTweets: {}
		});
	},
	render(){
		return {
			<div className="container-fluid"> 	  
			    <div className="row"> 
			        <div className="col-md-4 text-center"> 
			            <Stream onAddTweetToCollection={this.addTweetToCollection} /> 
			        </div> 
			        <div className="col-md-8"> 
			            <Collection 
			              tweets={this.state.collectionTweets} 
			              onRemoveTweetFromCollection={this.removeTweetFromCollection} 
			              onRemoveAllTweetsFromCollection={this.removeAllTweetsFromCollection} /> 
			        </div> 
			    </div>   
			</div> 
		};
	}
});

module.exports = Application;