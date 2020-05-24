import {
    TOGGLE_ANCHOR,
    TOGGLE_MENU_MOBILE,
    TOGGLE_SEARCH,
} from "../actions/actionTypes";

const initialStateGeneral = {
    toggleMobileMenu: false,
    toggleSearch: false,
    toggleAnchor: false,
    mobileDetect: null,
};

export const generalReducer = (
    state = initialStateGeneral,
    action: { type: string; payload: boolean }
) => {
    switch (action.type) {
        case TOGGLE_SEARCH:
            return { ...state, toggleSearch: action.payload };
        default:
            return state;
    }
};

export const mobileMenuReducer = (
    state = initialStateGeneral,
    action: { type: string; payload: boolean }
) => {
    switch (action.type) {
        case TOGGLE_MENU_MOBILE:
            return { ...state, toggleMobileMenu: action.payload };
        default:
            return state;
    }
};

export const anchorReducer = (
    state = initialStateGeneral,
    action: { type: string; payload: boolean }
) => {
    switch (action.type) {
        case TOGGLE_ANCHOR:
            return { ...state, toggleAnchor: action.payload };
        default:
            return state;
    }
};
