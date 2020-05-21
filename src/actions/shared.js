import {getInitialData} from "../utils/api";
import {receiveUsers} from "./users";
import {recievedTweets} from "./tweets";
import {setAuthedUSer} from "../actions/authedUser";

const AUTHED_ID = "tylermcginnis";
export const handleInitialData = () => {
    return (dispatch) => {
        return getInitialData().then(({users, tweets}) => {
            dispatch(receiveUsers(users));
            dispatch(recievedTweets(tweets));
            dispatch(setAuthedUSer(AUTHED_ID));
        });
    };
};
