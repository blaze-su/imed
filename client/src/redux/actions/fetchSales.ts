import {FETCH_SALES_REQUEST, LOADING_SALES_REQUEST} from './actionTypes';
import {request} from './index';

export const sendingFetchSales = (bool: any) => ({type: LOADING_SALES_REQUEST, payload: bool});
export const getSales = (data: any) => ({type: FETCH_SALES_REQUEST, payload: data});

export const fetchSales = (url: string) =>
    (dispatch: request) => {
        dispatch(sendingFetchSales(true));
        fetch(url)
            .then(response => response.json())
            .then(data => dispatch(getSales(data)))
            .then(() => dispatch(sendingFetchSales(false)))
            .catch(err => {
                dispatch(sendingFetchSales(false));
                console.error(err.message)
            });
    };
