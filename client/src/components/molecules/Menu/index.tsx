import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { HOST_API } from "@keys";
import { ILink } from "@interfaces";
import Link from "next/link";
import { fetchServices } from "@redux/actions";
import menu from "@data/menu.json";
import style from "./Menu.module.scss";

export interface IMenu {
    _id: string;
    title: string;
    link: string;
    node: ILink[] | null;
    module?: string;
}

export const Menu = () => {
    const active = useSelector(
        (store: any) => store.generalReducer.toggleSearch
    );

    return (
        <nav className={active ? style.hidden : style.nav}>
            <ul className={style.list}>
                {menu.map(({node, module, link, title, _id}: IMenu) => (
                    
                        <li key={_id} className={style.item}>
                            <Link href={link}>
                                <a className={style.link}>{title}</a>
                            </Link>
                            {node ? (
                                <ul className={style.innerList}>
                                    {node.map(({ link, title, _id }: ILink) => (
                                        <MenuLinkInner
                                            {...{ link, title }}
                                            key={_id}
                                        />
                                    ))}
                                </ul>
                            ) : null}
                            {
                                (module == "services") ? <MenuServices/> : null
                            }
                        </li>
                    
                ))}
            </ul>
        </nav>
    );
};



const MenuServices = () => {
    const url: string = `${HOST_API}/services`;
    const dispatch = useDispatch();

    useEffect((): any => dispatch(fetchServices(url)), [url, dispatch]);
    const servicesReducer = useSelector((store: any) => store.servicesReducer);
  
    const {services} = servicesReducer


    return <ul className={style.innerList}>
        {services.map(({_id, title}: any)=> (
            <MenuLinkInner link={`/services/${_id}`} title={title} key={_id}/>
        ))}
    </ul>
}


interface IMenuLink {
    title: string;
    link: string;
}
{/* 
const MenuLink = ({ link, title }: IMenuLink) => {
    return (
        <li className={style.item}>
            <Link href={link}>
                <a className={style.link}>{title}</a>
            </Link>
        </li>
    );
}; */}

const MenuLinkInner = ({ link, title }: IMenuLink) => {
    return (
        <li className={style.innerItem}>
            <Link href={link}>
                <a className={style.innerLink}>{title}</a>
            </Link>
        </li>
    );
};
