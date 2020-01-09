import {
	LOADING_VACANCIES_REQUEST,
	FETCH_VACANCIES_REQUEST
} from '../actions/actionTypes';

export const vacanciesReducer = (
	state = { vacancies: [], vacanciesIsLoading: true },
	action: { type: string; payload: any }
) => {
	switch (action.type) {
		case FETCH_VACANCIES_REQUEST:
			return { ...state, vacancies: action.payload };
		case LOADING_VACANCIES_REQUEST:
			return { ...state, vacanciesIsLoading: action.payload };
		default:
			return state;
	}
};
