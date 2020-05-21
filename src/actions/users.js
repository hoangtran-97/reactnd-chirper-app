export const RECEIVED_USERS = "RECEIVED_USERS";

export const receiveUsers = (users) => {
    return {
        type: RECEIVED_USERS,
        users,
    };
};
