import {FETCH_PRICE_REQUEST, LOADING_PRICE_REQUEST} from './actionTypes';
import {request} from './index';

export const sendingFetchPrice = (bool: any) => ({type: LOADING_PRICE_REQUEST, payload: bool});
export const getPrice = (data: any) => ({type: FETCH_PRICE_REQUEST, payload: data});

export const fetchPrice = (url: string) => (dispatch: request) =>
{
    dispatch(sendingFetchPrice(true));
    fetch(url)
        .then(response => response.json())
        .then(data => dispatch(getPrice(data)))
        .then(() => dispatch(sendingFetchPrice(false)))
        .catch(err => console.error(err.message));
};
