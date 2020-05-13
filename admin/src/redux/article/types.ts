import { IArticle } from "types";


export interface IArticleState {
    article: any | IArticle
    isLoading: boolean
    isEdit: boolean
}

export enum ArticleActionTypes {
    INIT    = "@@article/INIT",
    FETCH   = "@@article/FETCH",
    ADD     = "@@article/ADD",
    UPDATE  = "@@article/UPDATE",
    DELETE  = "@@article/DELETE",
    LOADING = "@@article/LOADING",
    ERROR   = "@@article/ERROR",
    EDIT    = "@@article/EDIT"
}

interface IInitArticleAction {
    type: typeof ArticleActionTypes.INIT;
}


interface IFetchArticleAction {
    type: typeof ArticleActionTypes.FETCH;
    payload: IArticle;
}

interface IAddArticleAction {
    type: typeof ArticleActionTypes.ADD;
    payload: IArticle;
}

interface IEditArticleAction {
    type: typeof ArticleActionTypes.EDIT;
    payload: boolean;
}

interface IUpdateArticleAction {
    type: typeof ArticleActionTypes.UPDATE;
    payload: IArticle;
}

interface ILoadingArticleAction {
    type: typeof ArticleActionTypes.LOADING;
    payload: boolean;
}

export type IArticleActionTypes =
    | IInitArticleAction
    | IFetchArticleAction
    | IEditArticleAction
    | IAddArticleAction    
    | ILoadingArticleAction
    | IUpdateArticleAction;
