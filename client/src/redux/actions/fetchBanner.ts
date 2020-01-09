import { FETCH_BANNERS_REQUEST, LOADING_BANNERS_REQUEST } from './actionTypes';

export const sendingFetchBanners = (bool: any) => ({
	type: LOADING_BANNERS_REQUEST,
	payload: bool
});
export const getBanners = (data: any) => ({
	type: FETCH_BANNERS_REQUEST,
	payload: data
});

export const fetchBanners = (url: string) => (dispatch: any) => {
	dispatch(sendingFetchBanners(true));
	fetch(url)
		.then(response => response.json())
		.then(data => dispatch(getBanners(data)))
		.then(() => dispatch(sendingFetchBanners(false)))
		.catch(err => console.error(err.message));
};
