import style from './index.scss';
import React from 'react';
import Link from 'next/link';

export interface IMenuItem {
    _id: string;
    title: string;
    link: string;
}

const data = [
    { _id: '34F3', title: 'Первичные консультации врачей', link: '/' },
    { _id: '3R53', title: 'Косметология', link: '/' },
    { _id: 'W4F3', title: 'Массаж', link: '/' },
    { _id: '34F6', title: 'Гирудотерапия', link: '/' },
    { _id: '34F0', title: 'Гемоанализ', link: '/' },
    { _id: '34F9', title: 'Остеопатия', link: '/' },
    { _id: '34F8', title: 'Мануальная терапия', link: '/' },
    { _id: '34F7', title: 'Лечебная гимнастика', link: '/' },
    { _id: '34F334', title: 'Аппаратное вытяжение позвоночника', link: '/' },
    { _id: '34T3', title: 'Прцедурный кабинет', link: '/' }];

const MenuSide = () => {
    return (
        <nav className={style.nav}>
            <ul className={style.list}>
                {data.map(
                    (item: IMenuItem) => (
                        <li className={style.item} key={item._id}>
                            <Link href={item.link}><a>{item.title}</a></Link>
                        </li>
                    )
                )}
            </ul>
        </nav>
    );
};

export default MenuSide;
