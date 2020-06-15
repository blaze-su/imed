import { applyMiddleware, createStore } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import { reducer } from "../reducers";
import thunk from "redux-thunk";

export default function configureStore() {
    return createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
}
