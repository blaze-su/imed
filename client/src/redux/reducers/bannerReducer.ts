import {
	FETCH_BANNERS_REQUEST,
	LOADING_BANNERS_REQUEST
} from '../actions/actionTypes';

export const bannerReducer = (
	state = { banners: [], bannerIsLoading: true },
	action: { type: string; payload: any }
) => {
	switch (action.type) {
		case FETCH_BANNERS_REQUEST:
			return { ...state, banners: action.payload };
		case LOADING_BANNERS_REQUEST:
			return { ...state, bannerIsLoading: action.payload };
		default:
			return state;
	}
};
