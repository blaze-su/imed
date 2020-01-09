import {FETCH_SALES_REQUEST, LOADING_SALES_REQUEST} from '../actions/actionTypes';

export const salesReducer = (state = {sales: [], salesIsLoading: true}, action: {type: string, payload: any}) => {
    switch (action.type) {
        case FETCH_SALES_REQUEST:
            return {...state, sales: action.payload};
        case LOADING_SALES_REQUEST:
            return {...state, salesIsLoading: action.payload};
        default:
            return state;
    }
};
