import {FETCH_DOCTORS_REQUEST, LOADING_DOCTORS_REQUEST} from './actionTypes';
import {request} from './index';

export const sendingFetchDoctors = (bool: any) => ({type: LOADING_DOCTORS_REQUEST, payload: bool});
export const getDoctors = (data: any) => ({type: FETCH_DOCTORS_REQUEST, payload: data});

export const fetchDoctors = (url: string) =>
    (dispatch: request) => {
        dispatch(sendingFetchDoctors(true));
        fetch(url)
            .then(response => response.json())
            .then(data => dispatch(getDoctors(data)))
            .then(() => dispatch(sendingFetchDoctors(false)))
            .catch(err => console.error(err.message));
    };
