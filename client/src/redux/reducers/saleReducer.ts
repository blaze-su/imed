import {FETCH_SALE_REQUEST, LOADING_SALE_REQUEST} from '../actions/actionTypes';

export const saleReducer = (state = {sale: [], saleIsLoading: true}, action: {type: string, payload: any}) => {
    switch (action.type) {
        case FETCH_SALE_REQUEST:
            return {...state, sale: action.payload};
        case LOADING_SALE_REQUEST:
            return {...state, saleIsLoading: action.payload};
        default:
            return state;
    }
};
