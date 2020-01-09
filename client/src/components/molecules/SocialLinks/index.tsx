import style from './index.scss';
import React from 'react';

export const SocialLinks = () => {
    return (
        <div className={style.soc}>
            <a href={'https://www.instagram.com/imed.krasnodar/'} title={'Медицинский центр iMED Krasnodar • Фото и видео в Instagram'}>
            <img className={style.img}
                 src={'https://storage.googleapis.com/intellectmedical-com_statics_pages/Static/Kub/inst.svg'}
                 alt={'Instgram'}/>
            </a>
            <a href={'https://www.youtube.com/channel/UCgo9PR1mu11DnED9BsN5rMg'} title={'Intellect Medical - YouTube'}>
            <img className={style.img}
                 src={'https://storage.googleapis.com/intellectmedical-com_statics_pages/Static/Kub/You.svg'}
                 alt={'YouTube'}/>
            </a>
        </div>
    );
};
