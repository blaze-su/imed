import {
  LOADING_SERVICES_REQUEST,
  FETCH_SERVICES_REQUEST
} from "../actions/actionTypes";

export const servicesReducer = (
  state = { services: [], servicesIsLoading: true },
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case FETCH_SERVICES_REQUEST:
      return { ...state, services: action.payload };
    case LOADING_SERVICES_REQUEST:
      return { ...state, servicesIsLoading: action.payload };
    default:
      return state;
  }
};
