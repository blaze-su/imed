import Link from 'next/link';
import React from 'react';
import style from './Logo.module.scss';

export const Logo = () => {
    return (
        <Link href={'/'}>
            
                <img
                    className={style.logo}
                    src={'/static/img/logo.svg'}
                    title={'logotype'}
                    alt={'logotype'} />
            
        </Link>
    );
};

