import React from 'react';
import style from './SocialLinks.module.scss';

export const SocialLinks = () => {
    return (
        <div className={style.soc}>
            <a className={style.link} href={'https://www.instagram.com/imed.krasnodar/'} title={'Медицинский центр iMED Krasnodar • Фото и видео в Instagram'}>
            <img className={style.img}
                 src={'/static/img/instagram.svg'}
                 alt={'Instgram'}/>
            </a>
            <a className={style.link} href={'https://www.youtube.com/channel/UCgo9PR1mu11DnED9BsN5rMg'} title={'Intellect Medical - YouTube'}>
            <img className={style.img}
                 src={'/static/img/youtube.svg'}
                 alt={'YouTube'}/>
            </a>
        </div>
    );
};
