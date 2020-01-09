import {LOADING_ARTICLES_REQUEST, FETCH_ARTICLES_REQUEST} from '../actions/actionTypes';

export const articlesReucer = (state = {articles: [], articlesIsLoading: true}, action: {type: string, payload: any}) => {
    switch (action.type) {
        case FETCH_ARTICLES_REQUEST:
            return {...state, articles: action.payload};
        case LOADING_ARTICLES_REQUEST:
            return {...state, articlesIsLoading: action.payload};
        default:
            return state;
    }
};
