import {
    FORM_FAILED,
    FORM_INFO,
    FORM_SUCCESS,
    SENDING_FORM,
    TOGGLE_FORM_DEFAULT,
    TOGGLE_FORM_FEEDBACK,
    TOGGLE_FORM_SEMINAR,
    TOGGLE_FORM_VACANCY,
} from "../actions/actionTypes";

const initialState = {
    formVacancyActive: false,
    formDefaultActive: false,
    formSeminarActive: false,
    formFeedbackActive: false,
    sendingForm: false,
    formSuccess: false,
    formFailed: false,
    formInfo: null,
};

export interface IFormInfo {
    target: string;
    yandexGoalId?: string;
}

export const formReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case TOGGLE_FORM_VACANCY:
            return { ...state, formVacancyActive: action.payload };
        case TOGGLE_FORM_DEFAULT:
            return { ...state, formDefaultActive: action.payload };
        case TOGGLE_FORM_SEMINAR:
            return { ...state, formSeminarActive: action.payload };
        case TOGGLE_FORM_FEEDBACK:
            return { ...state, formFeedbackActive: action.payload };
        case FORM_INFO:
            return { ...state, formInfo: action.payload };
        case SENDING_FORM:
            return { ...state, sendingForm: action.payload };
        case FORM_SUCCESS:
            return { ...state, formSuccess: action.payload };
        case FORM_FAILED:
            return { ...state, formFailed: action.payload };
        default:
            return state;
    }
};
