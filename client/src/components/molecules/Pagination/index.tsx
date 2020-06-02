import Link from 'next/link';
import React from 'react';
import style from './Pagination.module.scss';

export interface IPagination {
    pages: string[];
    currentPage: number;
}

export const Pagination = (props: IPagination) => {
    const {pages, currentPage} = props;
    return (
        <div className={style.item}>
            <Link href={`/articles/${currentPage - 1}`}><a className={style.prev}/></Link>
            {pages.map((item: string, index: number) =>
                 <Link href={item} key={index}>
                     <a className={style.link}>{index + 1}</a>
                </Link>
            )}
            <Link href={`/articles/${currentPage + 1}`}><a className={style.next}/></Link>
        </div>
    );
};
