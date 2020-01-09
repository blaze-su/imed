import {FETCH_PHOTO_REQUEST, LOADING_PHOTO_REQUEST} from './actionTypes';
import {request} from './index';

export const sendingFetchPhoto = (bool: any) => ({type: LOADING_PHOTO_REQUEST, payload: bool});
export const getPhoto = (data: any) => ({type: FETCH_PHOTO_REQUEST, payload: data});

export const fetchPhoto = (url: string) => (dispatch: request) =>
{
    dispatch(sendingFetchPhoto(true));
    fetch(url)
        .then(response => response.json())
        .then(data => dispatch(getPhoto(data)))
        .then(() => dispatch(sendingFetchPhoto(false)))
        .catch(err => console.error(err.message));
};
