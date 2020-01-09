import {FETCH_SERVICES_REQUEST, LOADING_SERVICES_REQUEST} from './actionTypes';
import {request} from './index';

export const sendingFetchServices = (bool: any) => ({type: LOADING_SERVICES_REQUEST, payload: bool});
export const getServices = (data: any) => ({type: FETCH_SERVICES_REQUEST, payload: data});

export const fetchServices = (url: string) => (dispatch: request) =>
{
    dispatch(sendingFetchServices(true));
    fetch(url)
        .then(response => response.json())
        .then(data => dispatch(getServices(data)))
        .then(() => dispatch(sendingFetchServices(false)))
        .catch(err => console.error(err.message));
};
