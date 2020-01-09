import {FETCH_SERVICE_REQUEST, LOADING_SERVICE_REQUEST} from '../actions/actionTypes';

export const serviceReducer = (state = {service: [], serviceIsLoading: true}, action: {type: string, payload: any}) => {
    switch (action.type) {
        case FETCH_SERVICE_REQUEST:
            return {...state, service: action.payload};
        case LOADING_SERVICE_REQUEST:
            return {...state, serviceIsLoading: action.payload};
        default:
            return state;
    }
};
