import React from "react"
import { connect } from "react-redux"
import { fetchTweets } from "../store/actions/tweetsActions"
import { Icon } from "react-fa"

@connect((store) => {
        return {
            tweetsFetching: store.tweets.fetching,
            tweetsFetched: store.tweets.fetched,
            tweets: store.tweets.tweets
        }
})
export default class Tweets extends React.Component {
    componentWillMount(){
    }

    render(){
        console.log(this.props);

        const { tweets, tweetsFetching, tweetsFetched } = this.props;

        var status = null;
        if(tweetsFetching){
            status = <span className="tweets_status">Fetching Tweets <Icon pulse name="spinner"/></span>;
        }else{
            status = <span className="tweets_status">{tweets.length} Tweets have been loaded</span>;
        }

        const mappedTweets = tweets.map(tweet => <li key={tweet.id}>{tweet.text}</li>);

        return (
            <div className="tweets_container">
            <span className="tweets_status">{status}</span>
            <ul>{mappedTweets}</ul>
            </div>
        )

    }
}
