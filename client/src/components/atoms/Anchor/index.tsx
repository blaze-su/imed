import css from './index.scss';
import React from 'react';

const scrollToTop = () => {

    if (window.pageYOffset > 0) {
        window.scrollBy(0, -80);
        setTimeout(scrollToTop, 0);
    }
};

export const Anchor = () => <img src={'https://storage.googleapis.com/intellectmedical-com_statics_pages/Static/Kub/%D0%9A%D0%BD%D0%BE%D0%BF%D0%BA%D0%B0%20%D0%BD%D0%B0%D0%B2%D0%B5%D1%80%D1%85.svg'} className={css.anchor} onClick={scrollToTop}/>;

