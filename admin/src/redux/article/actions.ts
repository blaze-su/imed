import { ArticleActionTypes as ActionTypes } from "./types";
import { IRequest } from "redux/types";
import { IArticle, IChunk } from "types";

const sendingRequest = (loading: boolean) => ({
    type: ActionTypes.LOADING,
    payload: loading,
});

export const initArticleComplete = () => ({
    type: ActionTypes.INIT,
    payload: false,
});

const fetchArticleComplete = (data: string) => ({
    type: ActionTypes.FETCH,
    payload: data,
});

const updateArticleComplete = (data: string) => ({
    type: ActionTypes.UPDATE,
    payload: data,
});

const addArticleComplete = (data: string) => ({
    type: ActionTypes.ADD,
    payload: data,
});

export const initArticle = () => (dispatch: IRequest) => {
    dispatch(initArticleComplete());
};

export const fetchArticle = (url: string) => (dispatch: IRequest) => {
    dispatch(sendingRequest(true));
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            //console.log(data);
            return dispatch(fetchArticleComplete(data));
        })
        .then(() => dispatch(sendingRequest(false)))
        .catch((err) => console.error(err.message));
};

export const updateArtcile = (url: string, article: IArticle) => (
    dispatch: IRequest
) => {
    dispatch(sendingRequest(true));
    fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(article),
    })
        .then((response) => response.json())
        .then((data) =>  dispatch(updateArticleComplete(data)))
        .then(() => dispatch(sendingRequest(false)))
        .catch((err) => console.error(err.message));
};

export const updateChunk = (url: string, chunk: IChunk) => (
    dispatch: IRequest
) => {
    dispatch(sendingRequest(true));
    //console.log("updateChunk", chunk)

    fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(chunk),
    })
        .then((response) => response.json())
        .then((data) =>  dispatch(updateArticleComplete(data)))
        .then(() => dispatch(sendingRequest(false)))
        .catch((err) => console.error(err.message));
};

export const deleteChunk = (url: string) => (
    dispatch: IRequest
) => {
    dispatch(sendingRequest(true));
    fetch(url, {
        method: "delete",
    })
        .then((response) => response.json())
        .then((data) =>  dispatch(updateArticleComplete(data)))
        .then(() => dispatch(sendingRequest(false)))
        .catch((err) => console.error(err.message));
};

export const addArtcile = (url: string, article: IArticle) => (
    dispatch: IRequest
) => {
    dispatch(sendingRequest(true));
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(article),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            return dispatch(addArticleComplete(data));
        })
        .then(() => dispatch(sendingRequest(false)))
        .catch((err) => console.error(err.message));
};
