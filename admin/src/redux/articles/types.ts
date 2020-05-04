export interface IArticles {
    title: string;
    _id: string;
}

export interface IArticlesState {
    articles: any;
    isLoading: boolean;
}

export enum ArticlesActionTypes {
    FETCH = "@@articles/FETCH",
    LOADING = "@@articles/LOADING",
    ERROR = "@@articles/ERROR",
}

interface IFetchArticlesAction {
    type: typeof ArticlesActionTypes.FETCH;
    payload: IArticles;
}

interface ILoadingArticlesAction {
    type: typeof ArticlesActionTypes.LOADING;
    payload: boolean;
}

export type IArticlesActionTypes =
    | IFetchArticlesAction
    | ILoadingArticlesAction;
