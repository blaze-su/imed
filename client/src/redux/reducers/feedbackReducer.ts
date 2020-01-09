import {FETCH_FEEDBACKS_REQUEST, LOADING_FEEDBACKS_REQUEST} from '../actions/actionTypes';

export const feedbackReducer = (state = {feedBack: [], feedbackIsLoading: true}, action: {type: string, payload: any}) => {
    switch (action.type) {
        case FETCH_FEEDBACKS_REQUEST:
            return {...state, feedbacks: action.payload};
        case LOADING_FEEDBACKS_REQUEST:
            return {...state, feedbackIsLoading: action.payload};
        default:
            return state;
    }
};
