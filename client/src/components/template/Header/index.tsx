import { FormSignUp, ModalForm } from "@components/organisms";
import React, { Fragment } from "react";

import { HeaderDesktop } from "./HeaderDesktop";
import { HeaderMobile } from "./HeaderMobile";
import { useSelector } from "react-redux";

const onSubmit = (formData: any) => {
    console.log("Form send");
    console.log(formData);
};


export const Header = () => {
    const active = useSelector(
        (store: any) => store.formReducer.formSignActive
    );
    return (
        <Fragment>
            {typeof window !== "undefined" ? (
                document.documentElement.clientWidth > 769 ? (
                    <HeaderDesktop />
                ) : (
                    <HeaderMobile />
                )
            ) : (
                <HeaderDesktop />
            )}
            {active ? (
                <ModalForm>
                    <FormSignUp
                        initialValues={{ confidentPolitic: "checked" }}
                        onSubmit={onSubmit}
                    />
                </ModalForm>
            ) : null}
        </Fragment>
    );
};
