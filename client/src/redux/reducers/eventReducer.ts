import {LOADING_EVENT_REQUEST, FETCH_EVENT_REQUEST} from '../actions/actionTypes';

export const eventReducer = (state = {event: {}, eventIsLoading: true}, action: {type: string, payload: any}) => {
    switch (action.type) {
        case FETCH_EVENT_REQUEST:
            return {...state, event: action.payload};
        case LOADING_EVENT_REQUEST:
            return {...state, eventIsLoading: action.payload};
        default:
            return state;
    }
};
