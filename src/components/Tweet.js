import React, {Component} from "react";
import {connect} from "react-redux";
import {formatTweet} from "../utils/helpers";
class Tweet extends Component {
    render() {
        console.log("tweet", this.props);
        const {tweet} = this.props;
        if (tweet === null) {
            return <p>This tweet does not exist</p>;
        }
        return <div>Tweet</div>;
    }
}
//id passed in as key
function mapStateToProps({authedUser, users, tweets}, {id}) {
    const tweet = tweets[id];
    const parentTweet = tweets[tweet.replyingTo];
    return {
        authedUser,
        tweet: formatTweet(tweet, users[tweet.author], authedUser, parentTweet),
    };
}
export default connect(mapStateToProps)(Tweet);
