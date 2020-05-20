import style from './index.scss';
import React from 'react';
import Link from 'next/link';

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

