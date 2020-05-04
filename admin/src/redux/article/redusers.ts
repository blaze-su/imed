import {
    ArticleActionTypes as ActionTypes,
    IArticleActionTypes,
    IArticleState,
} from "./types";

const initialState: IArticleState = {
    article: null,
    isLoading: true,
};

export const articleReduser = (
    state = initialState,
    action: IArticleActionTypes
) => {
    switch (action.type) {
        case ActionTypes.INIT:
            return initialState;
        case ActionTypes.FETCH:
            return {
                ...state,
                article: action.payload,
            };
        case ActionTypes.ADD:
            return {
                ...state,
                article: action.payload,
            };
        case ActionTypes.LOADING:
            return {
                ...state,
                isLoading: action.payload,
            };
        case ActionTypes.UPDATE:
            return {
                ...state,
                article: action.payload,
            };
        default:
            return state;
    }
};
