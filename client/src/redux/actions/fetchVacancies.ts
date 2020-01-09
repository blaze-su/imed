import {FETCH_VACANCIES_REQUEST, LOADING_VACANCIES_REQUEST} from './actionTypes';
import {request} from './index';

export const sendingFetchVacancies = (bool: any) => ({type: LOADING_VACANCIES_REQUEST, payload: bool});
export const getVacancies = (data: any) => ({type: FETCH_VACANCIES_REQUEST, payload: data});

export const fetchVacancies = (url: string) => (dispatch: request) =>
{
    dispatch(sendingFetchVacancies(true));
    fetch(url)
        .then(response => response.json())
        .then(data => dispatch(getVacancies(data)))
        .then(() => dispatch(sendingFetchVacancies(false)))
        .catch(err => console.error(err.message));
};
