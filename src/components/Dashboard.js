import React, {Component} from "react";
import {connect} from "react-redux";
import Tweet from "./Tweet";

class Dashboard extends Component {
    render() {
        return (
            <div>
                <h3>Your timeline</h3>
                {this.props.tweetIds.map((id) => (
                    <Tweet id={id} key={id}></Tweet>
                ))}
            </div>
        );
    }
}
function mapStateToProps({tweets}) {
    return {
        tweetIds: Object.keys(tweets).sort((a, b) => tweets[b].timestamp - tweets[a].timestamp),
    };
}
export default connect(mapStateToProps)(Dashboard);
