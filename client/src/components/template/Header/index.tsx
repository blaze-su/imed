// import { BrowserView, MobileView } from "react-device-detect";

import { FormDefault, ModalForm } from "@components/organisms";
import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import { HOST_API } from "@keys";
import { HeaderDesktop } from "./HeaderDesktop";
import { HeaderMobile } from "./HeaderMobile";
import { IFormInfo } from "@redux/reducers/formReducer";
import { formSuccess } from "@redux/actions/sendForm";

// const HeaderMobile = () => <h1>Header Mobile</h1>
// const HeaderDesktop = () => <h1>Header Desktop</h1>

interface IProps {
    isMobile: string | null;
}

export const Header = ({ isMobile }: IProps) => {
    const dispatch = useDispatch();
    const formInfo: IFormInfo = useSelector(
            (store: any) => store.formReducer.formInfo
        );

    const active = useSelector(
        (store: any) => store.formReducer.formDefaultActive
    );

    const onSubmit = (formData: any) => {
        
        console.log("formInfo", formInfo)

        const msn = `${formData.name}, ${formData.phone}, [${formInfo.target}]`;
        smsSent(msn).then(() => {
            console.log("SMS отправлено: ", msn);
            dispatch(formSuccess(true));
        });
    };

    const smsSent = (data: string) => {
        const url = `${HOST_API}/sms/`;

        return fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify({
                msn: data,
            }),
        });
    };

    return (
        <Fragment>
            {isMobile ? (
                <HeaderMobile key="HeaderMobile" />
            ) : (
                <HeaderDesktop key="HeaderDesktop" />
            )}

            {/* 
            <BrowserView>
                <HeaderDesktop key="HeaderDesktop"/>
            </BrowserView> */}
            {/*}
                document.documentElement.clientWidth > 769 ? (
                    <HeaderDesktop />
                ) : (
                    <HeaderMobile />
                )
            ) : (
                <HeaderDesktop />
            )} */}
            {active ? (
                <ModalForm>
                    <FormDefault
                        initialValues={{ confidentPolitic: "checked" }}
                        onSubmit={onSubmit}
                    />
                </ModalForm>
            ) : null}
        </Fragment>
    );
};
