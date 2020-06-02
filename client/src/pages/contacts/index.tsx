import {Button} from '../../components/atoms/Button';
import { Layout } from '@components/template';
import Map from '../../components/molecules/Map';
import React from 'react';
import css from './index.module.scss';
import {toggleFormSign} from '../../redux/actions';
import {useDispatch} from 'react-redux';
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

const Contacts = (props:any) => {
    const dispatch = useDispatch();
    useReset(dispatch);
    return(
        <Layout isMobile={props.isMobile} title={'Это тайлтл'} description={'Это дескрипшен'} keywords={'Это ключевое слово'} breadcrumbs={null}>
            <div className={css.wrap}>
                <MapDescription/>
                <Map/>
            </div>
        </Layout>
    );
};

export default Contacts;
