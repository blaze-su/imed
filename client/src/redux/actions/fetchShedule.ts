import {LOADING_SCHEDULE_REQUEST, FETCH_SCHEDULE_REQUEST} from './actionTypes';

export const sendingFetchSchedule = (bool: any) => ({type: LOADING_SCHEDULE_REQUEST, payload: bool});
export const getSchedule = (data: any) => ({type: FETCH_SCHEDULE_REQUEST, payload: data});

export const fetchSchedule = (url: string) => (dispatch: any) =>
{
    dispatch(sendingFetchSchedule(true));
    fetch(url)
        .then(response => response.json())
        .then(data => dispatch(getSchedule(data)))
        .then(() => dispatch(sendingFetchSchedule(false)))
        .catch(err => console.error(err.message));
};