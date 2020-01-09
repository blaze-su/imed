import {FETCH_SERVICES_REQUEST, LOADING_SERVICES_REQUEST} from '../actions/actionTypes';

export const fetchVideo = (state = {services: [], servicesIsLoading: true}, action: {type: string, payload: any}) => {
    switch (action.type) {
        case FETCH_SERVICES_REQUEST:
            const {services} = action.payload;
            return {...state, services: services};
        case LOADING_SERVICES_REQUEST:
            return {...state, servicesIsLoading: action.payload};
        default:
            return state;
    }
};
