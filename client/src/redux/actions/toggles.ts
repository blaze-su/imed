import {TOGGLE_FORM_DEFAULT, TOGGLE_FORM_FEEDBACK, TOGGLE_FORM_SEMINAR, TOGGLE_FORM_VACANCY, TOGGLE_MENU_MOBILE, TOGGLE_SEARCH} from './actionTypes';

import {toggleWithProps} from './index';

export const toggleFormVacancy = (bool: boolean) =>
    (dispatch: toggleWithProps) =>
        dispatch({type: TOGGLE_FORM_VACANCY, payload: bool});

export const toggleFormDefault = (bool: boolean) =>
    (dispatch: toggleWithProps) =>
        dispatch({type: TOGGLE_FORM_DEFAULT, payload: bool});

export const toggleFormFeedback = (bool: boolean) =>
    (dispatch: toggleWithProps) =>
        dispatch({type: TOGGLE_FORM_FEEDBACK, payload: bool});

export const toggleFormSeminar = (bool: boolean) =>
    (dispatch: toggleWithProps) =>
        dispatch({type: TOGGLE_FORM_SEMINAR, payload: bool});

export const toggleSearch = (bool: boolean) =>
    (dispatch: toggleWithProps) =>
        dispatch({type: TOGGLE_SEARCH, payload: bool});

export const toggleMobileMenu = (bool: boolean) =>
    (dispatch: toggleWithProps) =>
        dispatch(({type: TOGGLE_MENU_MOBILE, payload: bool}));
