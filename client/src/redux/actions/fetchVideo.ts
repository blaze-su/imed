import {FETCH_VIDEO_REQUEST, LOADING_VIDEO_REQUEST} from './actionTypes';
import {request} from './index';

export const sendingFetchVideo = (bool: any) => ({type: LOADING_VIDEO_REQUEST, payload: bool});
export const getVideo = (data: any) => ({type: FETCH_VIDEO_REQUEST, payload: data});

export const fetchVideo = (url: string) => (dispatch: request) =>
{
    dispatch(sendingFetchVideo(true));
    fetch(url)
        .then(response => response.json())
        .then(data =>dispatch(getVideo(data)))
        .then(() => dispatch(sendingFetchVideo(false)))
        .catch(err => console.error(err.message));
};
