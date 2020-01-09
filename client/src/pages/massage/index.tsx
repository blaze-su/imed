import style from './index.scss';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ErrorBoundary from '../../components/atoms/ErrorBoundary';
import MenuSide from '../../components/molecules/MenuSide';
import Price from '../../components/atoms/AccordionPrice';
import Doctor from '../../components/molecules/Doctor';
import Spinner from '../../components/atoms/Spinner';
import Title from '../../components/atoms/Title';
import Tabs from '../../components/organisms/Tabs';
import {fetchService} from '../../redux/actions';
import TabArticle from '../../components/molecules/TabArticle';
import useReset from '../../components/template/resetToggle';
import Layout from '../../components/organisms/Layout';
import {IArticle} from '../../components/molecules/Article';

const breadcrumbs = [
    {title: 'Главная', link: '/'},
    {title: 'Услуги', link: 'services/'},
    {title: 'Массаж', link: 'massage/'}
];

const Massage = () => {
    const dispatch = useDispatch();
    useReset(dispatch);
    const url: string = 'https://kasparov-store.ru/Service.json';
    useEffect((): any => dispatch(fetchService(url)), [url, dispatch]);
    const fetchServiceItem = useSelector((store: any) => store.fetchService);
    const {service, serviceIsLoading} = fetchServiceItem;
    return (
        <Layout title={'Это тайлтл'} description={'Это дескрипшен'} keywords={'Это ключевое слово'} breadcrumbs={breadcrumbs}>
            <ErrorBoundary>
                <Title text={'Массаж'}/>
                <section className={style.section}>
                    <MenuSide/>
                    <div className={style.wrap}>
                        <Tabs links={['Услуги и цены', 'Врачи', 'Общая информация', 'Оборудование']} currentTab={2}>
                            <div>
                                {serviceIsLoading ? <Spinner/> :
                                    service.map(({title, duration, cost, describe, _id}: any) => (
                                        <Price
                                            title={title}
                                            price={{time: duration, cost: cost}}
                                            data={{text: describe}}
                                            key={_id}
                                            article={'/articles'}/>
                                    ))}
                            </div>
                            <div className={style.doctors}>
                                {serviceIsLoading ? <Spinner/> :
                                    service.map(({categoriesId}: any) => <Doctor {...categoriesId.doctorsId}/>)}
                            </div>
                            <div>
                                {serviceIsLoading ? <Spinner/> :
                                    service.map(({categoriesId}: any) => {
                                        const {describe, _id} = categoriesId.informationsId;
                                        return <div key={_id} className={style.info}>{describe}</div>
                                    })}
                            </div>
                            <div>
                                {serviceIsLoading ? <Spinner/> :
                                    service.map(({categoriesId}: any) =>
                                        categoriesId.equipmentsId.map((item: IArticle) =>
                                            <TabArticle {...item} key={item._id} tags={['kek', 'v rot mne nogi']}/>
                                        )
                                    )}
                            </div>
                        </Tabs>
                    </div>
                </section>
            </ErrorBoundary>
        </Layout>
    );
};

export default Massage;
