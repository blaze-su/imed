import css from './index.scss';
import React from 'react';
import Map from '../../components/molecules/Map';
import {useDispatch} from 'react-redux';


import {Button} from '../../components/atoms/Button';
import {toggleFormSign} from '../../redux/actions';
import { Layout } from '@components/template';
import { useReset } from '@components/template/resetToggle';

const MapDescription = () => {
    const dispatch = useDispatch();
    return (
        <div className={css.desc}>
            <span className={css.address}>г. Краснодар, ул. Красных партизан, д.66</span>
            <span><a className={css.tel} href={'tel:+79181111414'}>+7(918)111-14-14</a></span>
            <span className={css.time}>Пн-Сб c 9:00 до 21:00<br/>Вс c 9:00 до 17:00</span>
            <span><a className={css.email} href={'mailto:info@almameds.ru'}>info@almameds.ru</a></span>
            <Button text={'Записаться на прием'} onClick={()  => dispatch(toggleFormSign(true))}/>
        </div>
    );
};

const Contacts = () => {
    const dispatch = useDispatch();
    useReset(dispatch);
    return(
        <Layout title={'Это тайлтл'} description={'Это дескрипшен'} keywords={'Это ключевое слово'} breadcrumbs={null}>
            <div className={css.wrap}>
                <MapDescription/>
                <Map/>
            </div>
        </Layout>
    );
};

export default Contacts;
