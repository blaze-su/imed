// import { BrowserView, MobileView } from "react-device-detect";

import { FormDefault, ModalForm } from "@components/organisms";
import React, { Fragment } from "react";

import { HeaderDesktop } from "./HeaderDesktop";
import { HeaderMobile } from "./HeaderMobile";
import { useSelector } from "react-redux";

const onSubmit = (formData: any) => {
    console.log("Form send");
    console.log(formData);
};

// const HeaderMobile = () => <h1>Header Mobile</h1>
// const HeaderDesktop = () => <h1>Header Desktop</h1>

interface IProps {
    isMobile: string | null
}

export const Header = ({isMobile}: IProps) => {
    const active = useSelector(
        (store: any) => store.formReducer.formDefaultActive
    );
    return (
        <Fragment>


            {isMobile ? <HeaderMobile key="HeaderMobile"/> : <HeaderDesktop key="HeaderDesktop"/>}
                
    

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
