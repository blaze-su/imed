import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchServices} from '@redux/actions';
import {ErrorBoundary, Accordion, Spinner, Title } from '@components/atoms';
import {useReset} from '@components/template/resetToggle';
import {Layout} from '@components/template';
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
    const url: string = 'https://localhost:3000/api/servoces';
    const dispatch = useDispatch();
    useReset(dispatch);
    useEffect((): any => dispatch(fetchServices(url)), [url, dispatch]);
    const servicesReducer = useSelector((store: any) => store.servicesReducer);
    const { services, servicesIsLoading } = servicesReducer;
    const categories = services.filter((s: any) => s.parentId === undefined);
    console.log(categories);
    
    const links = [
        {'title' : 'Главная', 'link' : '/'},
        {'title' : 'Услуги', 'link' : 'services/'}
    ];

    return(
        <Layout title={'Это тайлтл'} description={'Это дескрипшен'} keywords={'Это ключевое слово'} breadcrumbs={links}>
            {servicesIsLoading ? <Spinner/> :
            <ErrorBoundary>
                <Title text={'Услуги'} />
                {services.map(({_id, innerList}: IAccordion) =>
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
