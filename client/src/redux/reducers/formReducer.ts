import {
	TOGGLE_FORM_FEEDBACK,
	TOGGLE_FORM_SEMINAR,
	TOGGLE_FORM_SIGN,
	TOGGLE_FORM_VACANCY,
	SENDING_FORM,
	FORM_SUCCESS,
	FORM_FAILED
} from '../actions/actionTypes';

const initialState = {
	formVacancyActive: false,
	formSignActive: false,
	formSeminarActive: false,
	formFeedbackActive: false,
	sendingForm: false,
	formSuccess: false,
	formFailed: false
};

export const formReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case TOGGLE_FORM_VACANCY:
			return { ...state, formVacancyActive: action.payload };
		case TOGGLE_FORM_SIGN:
			return { ...state, formSignActive: action.payload };
		case TOGGLE_FORM_SEMINAR:
			return { ...state, formSeminarActive: action.payload };
		case TOGGLE_FORM_FEEDBACK:
			return { ...state, formFeedbackActive: action.payload };
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
