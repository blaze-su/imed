import {FETCH_SERVICE_REQUEST, LOADING_SERVICE_REQUEST} from './actionTypes';
import {request} from './index';

export const sendingFetchService = (bool: any) => ({type: LOADING_SERVICE_REQUEST, payload: bool});
export const getService = (data: any) => ({type: FETCH_SERVICE_REQUEST, payload: data});

export const fetchService = (url: string) => (dispatch: request) =>
{
    dispatch(sendingFetchService(true));
    fetch(url)
        .then(response => response.json())
        .then(data => dispatch(getService(data)))
        .then(() => dispatch(sendingFetchService(false)))
        .catch(err => console.error(err.message));
};
