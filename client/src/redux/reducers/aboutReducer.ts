import {
    FETCH_ABOUT_REQUEST,
    LOADING_ABOUT_REQUEST,
} from "../actions/actionTypes";

export const aboutReducer = (
    state = { about: [], aboutIsLoading: true },
    action: { type: string; payload: any }
) => {
    switch (action.type) {
        case FETCH_ABOUT_REQUEST:
            return { ...state, about: action.payload };
        case LOADING_ABOUT_REQUEST:
            return { ...state, aboutIsLoading: action.payload };
        default:
            return state;
    }
};
