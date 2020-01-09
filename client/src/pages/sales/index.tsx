import style from './index.scss';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Spinner from '../../components/atoms/Spinner';
import Title from '../../components/atoms/Title';
import Sale, {ISale} from '../../components/molecules/Sale';
import {fetchSales} from '../../redux/actions';
import useReset from '../../components/template/resetToggle';
import Layout from '../../components/organisms/Layout';

const SaleList = () => {
    const url: string = 'http://localhost:8000/promos';
    const dispatch = useDispatch();
    useReset(dispatch);
    useEffect((): any => dispatch(fetchSales(url)), [url, dispatch]);
    const fetchSale = useSelector((store: any) => store.fetchSales);
    const {sales, salesIsLoading} = fetchSale;
    return(
        <Layout title={'Это тайлтл'} description={'Это дескрипшен'} keywords={'Это ключевое слово'} breadcrumbs={[{title: 'Главная', link: '/'}, {title: 'Акции', link: '/sales'}]}>
            <Title text={'Акции'}/>
            {salesIsLoading ? <Spinner/> :
            <section className={style.section}>
                <div className={style.item}>{sales.map((item: ISale) => <Sale {...item} key={item._id}/>)}</div>
            </section>}
        </Layout>
    );
};

export default SaleList;
