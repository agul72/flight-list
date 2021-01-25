import {LOGIN_USER, LOGOUT_USER} from "./types";

const initState = {
    auth: {
        isAuthenticated: false,
        user: {}
    }
};

export function authReducer(state = initState, action) {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload
            };
        case LOGOUT_USER:
            return {
                ...state,
                auth: initState
            };

        default:
            return state;


    }
}
