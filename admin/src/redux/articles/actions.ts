import { ArticlesActionTypes as ActionTypes } from "./types";
import { IRequest } from "redux/types";

const sendingRequest = (loading: boolean) => ({
    type: ActionTypes.LOADING,
    payload: loading
});

const getData = (data: string) => ({ type: ActionTypes.FETCH, payload: data });

export const fetchArticles = (url: string) => (dispatch: IRequest) => {
    dispatch(sendingRequest(true));
    fetch(url)
        .then(response => response.json())
        .then(data => dispatch(getData(data)))
        .then(() => dispatch(sendingRequest(false)))
        .catch(err => console.error(err.message));
};
