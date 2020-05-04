import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { articleReduser } from "redux/article/redusers";
import { articlesReduser } from "redux/articles/redusers";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    articleReduser,
    articlesReduser,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);
