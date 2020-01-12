import style from './index.scss';
import React from 'react';
import Link from 'next/link';
import { IPhoto } from '@interfaces';


export interface ISale {
    _id: string;
    title: string;
    date: string;
    photo: IPhoto;
    link: string;
}


export const Sale = (props: ISale) => {
    const {title, photo, date, _id} = props;
    return (
        <div className={style.item}>
            <Link href={`action/${_id}`}>
                <a className={style.link}>
                    <img className={style.img} src={photo.src} alt={title} title={title}/>
                </a>
            </Link>
            <div className={style.textWrap}>
                <Link href={`action/${_id}`}>
                    <a className={style.link}>
                        <p className={style.date}>{date}</p>
                    </a>
                </Link>
                <Link href={`action/${_id}`}>
                    <a className={style.link}>
                        <p className={style.desc}>{title}</p>
                    </a>
                </Link>
            </div>
        </div>
    );
};