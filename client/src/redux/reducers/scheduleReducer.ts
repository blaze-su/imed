import {LOADING_SCHEDULE_REQUEST, FETCH_SCHEDULE_REQUEST} from '../actions/actionTypes';

export const scheduleReducer = (state = {schedule: [], scheduleIsLoading: true}, action: {type: string, payload: any}) => {
    switch (action.type) {
        case FETCH_SCHEDULE_REQUEST:
            return {...state, schedule: action.payload};
        case LOADING_SCHEDULE_REQUEST:
            return {...state, scheduleIsLoading: action.payload};
        default:
            return state;
    }
};