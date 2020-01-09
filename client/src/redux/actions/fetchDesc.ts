import {LOADING_DESC_REQUEST, FETCH_DESC_REQUEST} from './actionTypes';

export const sendingFetchDesc = (bool: any) => ({type: LOADING_DESC_REQUEST, payload: bool});
export const getDesc = (data: any) => ({type: FETCH_DESC_REQUEST, payload: data});

export const fetchDesc = (url: string) => (dispatch: any) =>
{
    dispatch(sendingFetchDesc(true));
    fetch(url)
        .then(response => response.json())
        .then(data => dispatch(getDesc(data)))
        .then(() => dispatch(sendingFetchDesc(false)))
        .catch(err => console.error(err.message));
};