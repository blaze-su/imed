import {
    FETCH_FEEDBACKS_REQUEST,
    LOADING_FEEDBACKS_REQUEST
} from "./actionTypes";
import { request } from "./index";

export const sendingFetchFeedbacks = (bool: any) => ({
    type: LOADING_FEEDBACKS_REQUEST,
    payload: bool
});

export const getFeedbacks = (data: any) => ({
    type: FETCH_FEEDBACKS_REQUEST,
    payload: data
});

export const fetchFeedbacks = (url: string) => (dispatch: request) => {
    dispatch(sendingFetchFeedbacks(true));
    fetch(url)
        .then(response => response.json())
        .then(data => dispatch(getFeedbacks(data)))
        .then(() => dispatch(sendingFetchFeedbacks(false)))
        .catch(err => console.error(err.message));
};
