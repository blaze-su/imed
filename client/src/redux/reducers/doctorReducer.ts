import {FETCH_DOCTOR_REQUEST, LOADING_DOCTOR_REQUEST} from '../actions/actionTypes';

export const doctorReducer = (state = {doctor: [], doctorIsLoading: true}, action: {type: string, payload: any}) => {
    switch (action.type) {
        case FETCH_DOCTOR_REQUEST:
            return {...state, doctor: action.payload};
        case LOADING_DOCTOR_REQUEST:
            return {...state, doctorIsLoading: action.payload};
        default:
            return state;
    }
};
