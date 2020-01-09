import {FETCH_VIDEO_REQUEST, LOADING_VIDEO_REQUEST} from '../actions/actionTypes';

export const videoReducer = (state = {videos: [], videoIsLoading: true}, action: {type: string, payload: any}) => {
    switch (action.type) {
        case FETCH_VIDEO_REQUEST:
            return {...state, videos: action.payload};
        case LOADING_VIDEO_REQUEST:
            return {...state, videoIsLoading: action.payload};
        default:
            return state;
    }
};
