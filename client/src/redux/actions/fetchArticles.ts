import {
    FETCH_ARTICLES_REQUEST,
    LOADING_ARTICLES_REQUEST,
} from "./actionTypes";
import { request } from "./index";

export const sendingFetchArticles = (bool: any) => ({
    type: LOADING_ARTICLES_REQUEST,
    payload: bool,
});

export const getArticles = (data: any) => ({
    type: FETCH_ARTICLES_REQUEST,
    payload: data,
});

export const fetchArticles = (url: string) => (dispatch: request) => {
    dispatch(sendingFetchArticles(true));
    fetch(url)
        .then((response) => response.json())
        .then((data) => dispatch(getArticles(data)))
        .then(() => dispatch(sendingFetchArticles(false)))
        .catch((err) => console.error(err.message));
};
