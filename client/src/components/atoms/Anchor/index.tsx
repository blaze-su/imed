import css from './index.scss';
import React from 'react';

const scrollToTop = () => {

    if (window.pageYOffset > 0) {
        window.scrollBy(0, -80);
        setTimeout(scrollToTop, 0);
    }
};

export const Anchor = () => <img src={'/static/img/up-arrow.svg'} className={css.anchor} onClick={scrollToTop}/>;

