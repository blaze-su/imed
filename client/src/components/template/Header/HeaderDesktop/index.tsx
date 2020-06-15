import { Address, Button, Logo, Telephone } from "@components/atoms";

import { Fragment } from "react";
import { Menu } from "@components/molecules";
import desktopStyle from "./HeaderDesktop.module.scss";
import { formInfo } from "@redux/actions/sendForm";
import { toggleFormDefault } from "@redux/actions";
import { useDispatch } from "react-redux";

export const HeaderDesktop = () => {
    const dispatch = useDispatch();
    return (
        <Fragment>
            <header className={desktopStyle.header}>
                <div className={desktopStyle.top}>
                    <Address />
                    <Telephone />
                </div>
                <div className={desktopStyle.wrap}>
                    <div className={desktopStyle.logo__box}>
                        <Logo />
                    </div>

                    <div className={desktopStyle.center}>
                        <Menu />
                    </div>
                    <Button
                        text="Записаться на прием"
                        onClick={() => {
                            dispatch(
                                formInfo({target: "**TEST**"})
                            );
                            dispatch(toggleFormDefault(true));
                        }}
                    />
                </div>
            </header>
            <div className={desktopStyle.clear} />
        </Fragment>
    );
};
