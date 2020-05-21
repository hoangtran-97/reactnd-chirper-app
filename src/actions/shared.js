import {getInitialData} from "../utils/api";
import {receiveUsers} from "./users";
import {recievedTweets} from "./tweets";
export const handleInitialData = () => {
    return (dispatch) => {
        return getInitialData().then(({users, tweets}) => {
            dispatch(receiveUsers(users));
            dispatch(recievedTweets(tweets));
        });
    };
};
