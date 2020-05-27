import { Address, Burger, Button, Logo, Telephone } from "@components/atoms";
import { useDispatch, useSelector } from "react-redux";

import { Fragment } from "react";
import Link from "next/link";
import style from "./HeaderMobile.module.scss";
import { toggleFormSign } from "@redux/actions";

export const HeaderMobile = () => {
    const dispatch = useDispatch();
    const active = useSelector(
        (store: any) => store.mobileMenuReducer.toggleMobileMenu
    );
    return (
        <Fragment>
            <header className={style.header}>
                <div className={style.header__top}>
                    <Logo />
                    <Burger />
                </div>
                {active ? (
                    <div className={style.menu}>
                        <Address />
                        <br />
                        <Telephone />
                        <br />
                        <ul className={style.menuList}>
                            <li className={style.menuItem}>
                                <Link href="/about/photo">
                                    <a className={style.menuLink}>Клиника</a>
                                </Link>
                            </li>
                            <li className={style.menuItem}>
                                <Link href="/services">
                                    <a className={style.menuLink}>Услуги</a>
                                </Link>
                            </li>
                            <li className={style.menuItem}>
                                <Link href="/actions">
                                    <a className={style.menuLink}>Акции</a>
                                </Link>
                            </li>
                            <li className={style.menuItem}>
                                <Link href="/doctors">
                                    <a className={style.menuLink}>Врачи</a>
                                </Link>
                            </li>
                            <li className={style.menuItem}>
                                <Link href="/contacts">
                                    <a className={style.menuLink}>Контакты</a>
                                </Link>
                            </li>
                        </ul>
                        <Button
                            text="Записаться на прием"
                            onClick={() => dispatch(toggleFormSign(true))}
                        />
                        <br />
                    </div>
                ) : null}
            </header>
        </Fragment>
    );
};
