import {CREATE_FLIGHT, DELETE_FLIGHT, UPDATE_FLIGHT} from "./types";

const initState = {
    flight: []
};

export function flightReducer(state = initState, action) {
    switch (action.type) {
        case CREATE_FLIGHT:
            return {
                ...state,
                flight: [...state.flight, action.payload]
            }
        case UPDATE_FLIGHT:
            return {
                ...state,
                flight: state.flight.filter(item => {
                    if (item.id === action.payload.id) {
                        return action.payload
                    }
                    return item;
                })
            }
        case DELETE_FLIGHT:
            return {
                ...state,
                flight: state.flight.filter(item => item.id !== action.payload)
            }
        default:
            return state;
    }
}
