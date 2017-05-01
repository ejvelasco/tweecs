import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.react';
import Tweet from './Tweet.react';

export default class StreamTweet extends React.Component {
    constructor() {
        super();
        this.state = {
            numberOfCharactersIsIncreasing: null,
            headerText: null
        };
    }

    componentWillMount() {
        this.setState({
            numberOfCharactersIsIncreasing: true,
            headerText: 'Latest public photo from Twitter'
        });

        window.tweecs = {
            numberOfReceivedTweets: 1,
            numberOfDisplayedTweets: 1
        };
    }

    componentDidMount() {
        const componentDOMRepresentation = ReactDOM.findDOMNode(this);

        window.tweecs.headerHtml = componentDOMRepresentation.children[0].outerHTML;
        window.tweecs.tweetHtml = componentDOMRepresentation.children[1].outerHTML;
    }

    componentWillReceiveProps(nextProps) {
        const currentTweetLength = this.props.tweet.text.length;
        const nextTweetLength = nextProps.tweet.text.length;
        const numberOfCharactersIsIncreasing = (nextTweetLength > currentTweetLength);
        let headerText;

        if (numberOfCharactersIsIncreasing) {
            headerText = 'Number of characters is increasing';
        } else {
            headerText = 'Latest public photo from Twitter';
        }

        this.setState({
            numberOfCharactersIsIncreasing,
            headerText
        });

        window.tweecs.numberOfReceivedTweets++;
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.tweet.text.length > 1;
    }

    componentDidUpdate(prevProps, prevState) {
        window.tweecs.numberOfDisplayedTweets++;
    }

    componentWillUnmount() {
        delete window.tweecs;
    }

    render() {
        return (
            <section>
                <Header text={this.state.headerText} />
                <Tweet
                    tweet={this.props.tweet}
                    onImageClick={this.props.onAddTweetToCollection} />
            </section>
        );
    }
}