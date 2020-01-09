import {LOADING_PHOTO_REQUEST, FETCH_PHOTO_REQUEST} from '../actions/actionTypes';

export const photoReducer = (state = {photos: [], photoIsLoading: true}, action: {type: string, payload: any}) => {
    switch (action.type) {
        case FETCH_PHOTO_REQUEST:
            return {...state, photos: action.payload};
        case LOADING_PHOTO_REQUEST:
            return {...state, photoIsLoading: action.payload};
        default:
            return state;
    }
};
