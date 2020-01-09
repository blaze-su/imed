import {LOADING_EVENT_REQUEST, FETCH_EVENT_REQUEST} from './actionTypes';
import {request} from './index';

export const sendingFetchEvent = (bool: any) => ({type: LOADING_EVENT_REQUEST, payload: bool});
export const getEvent = (data: any) => ({type: FETCH_EVENT_REQUEST, payload: data});

export const fetchEvent = (url: string) => (dispatch: request) =>
{
    dispatch(sendingFetchEvent(true));
    fetch(url)
        .then(response => response.json())
        .then(data => dispatch(getEvent(data)))
        .then(() => dispatch(sendingFetchEvent(false)))
        .catch(err => console.error(err.message));
};
