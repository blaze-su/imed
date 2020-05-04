import { ArticlesActionTypes as ActionTypes, IArticlesActionTypes , IArticlesState } from './types'

const initialState: IArticlesState = {
    articles: null,
    isLoading: true
}

export const articlesReduser = (state = initialState, action: IArticlesActionTypes) => {
    switch (action.type) {
        case ActionTypes.FETCH:
            return {
                ...state,
                articles: action.payload
            }
        case ActionTypes.LOADING: 
            return {
                ...state,
                isLoading: action.payload
            }    
        default:
            return state
    }
}