import React from 'react';
import style from './Spinner.module.scss';

export const Spinner = () => {
    return (
        <div className={style.bg}>
            <div className={style.circle}>
                <div className={`${style.item1} ${style.item}`}/>
                <div className={`${style.item2} ${style.item}`}/>
                <div className={`${style.item3} ${style.item}`}/>
                <div className={`${style.item4} ${style.item}`}/>
                <div className={`${style.item5} ${style.item}`}/>
                <div className={`${style.item6} ${style.item}`}/>
                <div className={`${style.item7} ${style.item}`}/>
                <div className={`${style.item8} ${style.item}`}/>
                <div className={`${style.item9} ${style.item}`}/>
                <div className={`${style.item10} ${style.item}`}/>
                <div className={`${style.item11} ${style.item}`}/>
                <div className={`${style.item12} ${style.item}`}/>
            </div>
        </div>
    );
};
