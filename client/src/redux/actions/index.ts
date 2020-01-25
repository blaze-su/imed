import {Dispatch} from 'react';

/*routing*/

export * from './fetchBanner';
export * from './fetchSales';
export * from './fetchSale';
export * from './fetchDoctors';
export * from './fetchDoctor';
export * from './fetchFeedback';
export * from './fetchAbout';
export * from './fetchPhoto';
export * from './fetchPrice';
export * from './fetchVideo';
export * from './fetchArticles';
export * from './fetchService';
export * from './fetchServices';
export * from './fetchVacancies';
export * from './fetchEvent';
export * from './fetchShedule';
export * from './fetchDesc';
export * from './toggles';

/*types*/

export type toggleWithProps = Dispatch<{type: string; payload: boolean}>;
export type request = Dispatch<{type: string; payload: string}>;
