export const RECEIVED_TWEETS = "RECEIVED_TWEETS";

export const receiveTweets = (tweets) => {
    return {
        type: RECEIVED_TWEETS,
        tweets,
    };
};
