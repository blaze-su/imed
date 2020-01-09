import {FETCH_DOCTOR_REQUEST, LOADING_DOCTOR_REQUEST} from './actionTypes';
import {request} from './index';

export const sendingFetchDoctor = (bool: any) => ({type: LOADING_DOCTOR_REQUEST, payload: bool});
export const getDoctor = (data: any) => ({type: FETCH_DOCTOR_REQUEST, payload: data});

export const fetchDoctor = (url: string) => (dispatch: request) =>
{
    dispatch(sendingFetchDoctor(true));
    fetch(url)
        .then(response => response.json())
        .then(data => dispatch(getDoctor(data)))
        .then(() => dispatch(sendingFetchDoctor(false)))
        .catch(err => console.error(err.message));
};
