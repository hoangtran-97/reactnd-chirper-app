import {getInitialData} from "../utils/api";
import {receiveUsers} from "./users";
import {recieveTweets} from "./tweets";
import {setAuthedUser} from "./authedUser";

const AUTHED_ID = "tylermcginnis";
export const handleInitialData = () => {
    return (dispatch) => {
        return getInitialData().then(({users, tweets}) => {
            dispatch(receiveUsers(users));
            dispatch(recieveTweets(tweets));
            dispatch(setAuthedUser(AUTHED_ID));
        });
    };
};
