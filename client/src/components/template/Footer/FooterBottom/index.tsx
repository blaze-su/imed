import Link from 'next/link';
import React from 'react';
import style from './FooterBottom.module.scss';

export const FooterBottom = () => {

    return(
        <div className={style.wrap}>
            <span className={style.link}>Медицинский центр Степана Черняка 2019</span>
            <Link href='/agreement'><a className={style.link}>Соглашение об обработке перснальных данных</a></Link>
            <a className={style.develop} href={'https://blaze.su'} title={'blaze.su'}>
                <span>Разработка и продвижение</span>
                <img className={style.blaze} src={'/static/img/blaze.svg'} title={'blaze.su'} alt={'Blaze.su'}/>
            </a>
        </div>
    );
};