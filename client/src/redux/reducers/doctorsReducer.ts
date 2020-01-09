import {LOADING_DOCTORS_REQUEST, FETCH_DOCTORS_REQUEST} from '../actions/actionTypes';

export const doctorsReducer = (state = {doctor: [], doctorsIsLoading: true}, action: {type: string, payload: any}) => {
    switch (action.type) {
        case FETCH_DOCTORS_REQUEST:
            return {...state, doctors: action.payload};
        case LOADING_DOCTORS_REQUEST:
            return {...state, doctorsIsLoading: action.payload};
        default:
            return state;
    }
};
