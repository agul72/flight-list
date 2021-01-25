import {CREATE_FLIGHT, DELETE_FLIGHT, UPDATE_FLIGHT} from "./types";

export function createFlight(flight) {
    return {
        type: CREATE_FLIGHT,
        payload: flight
    }
}

export function updateFlight(flight) {
    return {
        type: UPDATE_FLIGHT,
        payload: flight
    }
}

export function deleteFlight(id) {
    return {
        type: DELETE_FLIGHT,
        payload: id
    }
}
