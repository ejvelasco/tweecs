const React = require('react');

const tweetStyle = {
	position:'relative',
	display:'inline-block',
	width: '300px;',
	height:'400px',
	margin:'10px'
};
const imageStyle = { 
  maxHeight: '400px', 
  boxShadow: '0px 1px 1px 0px #aaa', 
  border: '1px solid #fff' 
}; 

const Tweet = React.createClass({
	propTypes: {
		tweet: function(properties, propertyName, componentName){
			let tweet = properties[propertyName];
			if(!tweet){
				return new Error('Tweet must be set.');
			}
			if(!tweet.media){
				return new Error('Tweet must have image.');
			}
		},
		onImageClick: React.PropTypes.func
	},
	handleImageClick(){
		let tweet = this.props.tweet;
		let onImageClick = this.props.onImageClick;

		if(onImageClick){
			onImageClick(tweet);
		}
	}, 
	render(){
		let tweet = this.props.tweet;
		let tweetMediaUrl = tweet.media[0].url;
		return(
			<div style={tweetStyle}> 
				<img src={tweetMediaUrl} onClick={this.handleImageClick} style={imageStyle} /> 
			</div> 
		);
	}
});

module.exports = Tweet;
