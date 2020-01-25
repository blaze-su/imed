import {LOADING_PRICE_REQUEST, FETCH_PRICE_REQUEST} from '../actions/actionTypes';

export const priceReducer = (state = {prices: [], priceIsLoading: true}, action: {type: string, payload: any}) => {
    switch (action.type) {
        case FETCH_PRICE_REQUEST:
            return {...state, prices: action.payload};
        case LOADING_PRICE_REQUEST:
            return {...state, priceIsLoading: action.payload};
        default:
            return state;
    }
};
