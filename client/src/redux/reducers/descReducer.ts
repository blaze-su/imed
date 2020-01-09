import {LOADING_DESC_REQUEST, FETCH_DESC_REQUEST} from '../actions/actionTypes';

export const descReducer = (state = {desc: [], descIsLoading: true}, action: {type: string, payload: any}) => {
    switch (action.type) {
        case FETCH_DESC_REQUEST:
            return {...state, desc: action.payload};
        case LOADING_DESC_REQUEST:
            return {...state, descIsLoading: action.payload};
        default:
            return state;
    }
};