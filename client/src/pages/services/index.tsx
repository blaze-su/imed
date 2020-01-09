import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchServices} from '@redux/actions';
import {ErrorBoundary, Accordion, Spinner, Title } from '@components/atoms';


import {useReset} from '@components/template/resetToggle';
import {Layout} from '@components/organisms/Layout';
import './index.scss';

export interface IAccordion {
    _id: string;
    anchor: string;
    url: string;
    innerList: Array<{
        title: string;
        link: string;
    }>
}

const Services = () => {
    const url: string = 'https://kasparov-store.ru/Services.json';
    const dispatch = useDispatch();
    useReset(dispatch);
    useEffect((): any => dispatch(fetchServices(url)), [url, dispatch]);
    const fetchServicesList = useSelector((store: any) => store.fetchServices);
    const servicesList = fetchServicesList.services;
    const isLoading = fetchServicesList.servicesIsLoading;
    const links = [
        {'title' : 'Главная', 'link' : '/'},
        {'title' : 'Услуги', 'link' : 'services/'}
    ];

    return(
        <Layout title={'Это тайлтл'} description={'Это дескрипшен'} keywords={'Это ключевое слово'} breadcrumbs={links}>
            {isLoading ? <Spinner/> :
            <ErrorBoundary>
                <Title text={'Услуги'} />
                {servicesList.map(({_id, innerList}: IAccordion) =>
                    <Accordion
                        link={{anchor: 'Первичные консультации  врачей', url: '/'}}
                        innerList={innerList}
                        key={_id}/>
                )}
            </ErrorBoundary>}
        </Layout>
    );
};

export default Services;
