import {FETCH_SALE_REQUEST, LOADING_SALE_REQUEST} from './actionTypes';
import {request} from './index';

export const sendingFetchSale = (bool: any) => ({type: LOADING_SALE_REQUEST, payload: bool});
export const getSale = (data: any) => ({type: FETCH_SALE_REQUEST, payload: data});

export const fetchSale = (url: string) => (dispatch: request) =>
{
    dispatch(sendingFetchSale(true));
    fetch(url)
        .then(response => response.json())
        .then(data => dispatch(getSale(data)))
        .then(() => dispatch(sendingFetchSale(false)))
        .catch(err => console.error(err.message));
};
