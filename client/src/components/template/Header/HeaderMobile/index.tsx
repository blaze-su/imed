import { Address, Burger, Button, Logo, Telephone } from "@components/atoms";
import { useDispatch, useSelector } from "react-redux";

import { Fragment } from "react";
import Link from "next/link";
import mobileStyle from "./HeaderMobile.module.scss";
import { toggleFormSign } from "@redux/actions";

export const HeaderMobile = () => {
    const dispatch = useDispatch();
    const active = useSelector(
        (store: any) => store.mobileMenuReducer.toggleMobileMenu
    );
    return (
        <Fragment>
            <header className={mobileStyle.header__box}>
                <Logo />
                <Burger />
            </header>

            {active ? (
                <div className={mobileStyle.menu}>
                    <Address /><br/>
                    <Telephone /><br/>
                    <ul className={mobileStyle.menuList}>
                        <li className={mobileStyle.menuItem}>
                            <Link href="/about/photo">
                                <a className={mobileStyle.menuLink}>Клиника</a>
                            </Link>
                        </li>
                        <li className={mobileStyle.menuItem}>
                            <Link href="/services">
                                <a className={mobileStyle.menuLink}>Услуги</a>
                            </Link>
                        </li>
                        <li className={mobileStyle.menuItem}>
                            <Link href="/actions">
                                <a className={mobileStyle.menuLink}>Акции</a>
                            </Link>
                        </li>
                        <li className={mobileStyle.menuItem}>
                            <Link href="/doctors">
                                <a className={mobileStyle.menuLink}>Врачи</a>
                            </Link>
                        </li>
                        <li className={mobileStyle.menuItem}>
                            <Link href="/contacts">
                                <a className={mobileStyle.menuLink}>Контакты</a>
                            </Link>
                        </li>
                    </ul>
                    <Button
                        text="Записаться на прием"
                        onClick={() => dispatch(toggleFormSign(true))}
                    /><br/>
                </div>
            ) : null}
        </Fragment>
    );
};
