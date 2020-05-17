import style from './index.scss';
import React from 'react';
import {Button} from '../../components/atoms/Button';
import {useDispatch} from 'react-redux';
import { useReset } from '@components/template/resetToggle';


const Index = () => {
    const dispatch = useDispatch();
    useReset(dispatch);
    return(
        <div className={style.wrap}>
            <img className={style.img} src={'/src/statics/notfound.jpg'} alt={''}/>
            <h1 className={style.title}>К сожалению страница не найденна или была удалена</h1>
            <span className={style.number}>404</span>
            <Button text={'На главную'} onClick={() => console.log(7457)}/>
        </div>
    );
};

export default Index;
