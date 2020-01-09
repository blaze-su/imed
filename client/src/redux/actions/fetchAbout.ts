import {FETCH_ABOUT_REQUEST, LOADING_ABOUT_REQUEST} from './actionTypes';
import {request} from './index';

export const sendingFetchAbout = (bool: any) => ({type: LOADING_ABOUT_REQUEST, payload: bool});
export const getAbout = (data: any) => ({type: FETCH_ABOUT_REQUEST, payload: data});

export const fetchAbout = (url: string) => (dispatch: request) =>
{
    dispatch(sendingFetchAbout(true));
    fetch(url)
        .then(response => response.json())
        .then(data => dispatch(getAbout(data)))
        .then(() => dispatch(sendingFetchAbout(false)))
        .catch(err => console.error(err.message));
};
