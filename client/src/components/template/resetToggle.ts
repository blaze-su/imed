import {
    toggleFormDefault,
    toggleFormFeedback,
    toggleFormSeminar,
    toggleFormVacancy,
    toggleMobileMenu,
    toggleSearch
} from '@redux/actions';

export const useReset = (dispatch: any) =>{
    dispatch(toggleFormVacancy(false));
    dispatch(toggleFormDefault(false));
    dispatch(toggleFormSeminar(false));
    dispatch(toggleFormFeedback(false));
    dispatch(toggleSearch(false));
    dispatch(toggleMobileMenu(false));
};