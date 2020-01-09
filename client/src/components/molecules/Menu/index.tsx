import style from './index.scss';
import React from 'react';
import Link from 'next/link';
import { useSelector} from 'react-redux';
import { ILink } from '@interfaces';
import menu from './menu.json';

export interface IMenu {
    _id: string;
    title: string;
    link: string;
    node: ILink[] | null;
}

export const Menu = () => {
    const active = useSelector((store: any) => store.generalReducer.toggleSearch);

    return (
        <nav className={active ? style.hidden : style.nav}>
            <ul className={style.list}>
                {menu.map(
                    ({node, link, title, _id}: IMenu) => (
                        node === null ?
                        <Link href={link} key={_id}>
                            <a className={style.link}><li className={style.item}>{title}</li></a>
                        </Link>
                        :
                        <li key={_id} className={style.item}>
                            <Link href={link}><a className={style.link}>{title}</a></Link>
                            <ul className={style.innerList}>
                                {node.map(({link, title, _id}: ILink) => (
                                    <li key={_id} className={style.innerItem}>
                                        <Link href={link}><a className={style.innerLink}>{title}</a></Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    )
                )}
            </ul>
        </nav>
    );
};
