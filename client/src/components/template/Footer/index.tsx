import {
    FooterBottom,
    FooterContacts,
    FooterInfo,
    FooterMenu,
} from "@components/template/Footer";

import { ILink } from "@interfaces";
import React from "react";
import style from "./Footer.module.scss";
import { useSelector } from "react-redux";

const about: Array<ILink> = [
    { _id: "98H45T", title: "О нас", link: "/about" },
    { _id: "98H45U", title: "Врачи", link: "/doctors" },
    { _id: "Q8H45U", title: "Акции", link: "/actions" },
    { _id: "E8H45U", title: "Контакты", link: "/contacts" },
];

export const Footer = () => {
    const servicesReducer = useSelector((store: any) => store.servicesReducer);

    const services: ILink[] = servicesReducer.services.map((service: any):ILink => {
        return {
            _id: service._id,
            title: service.title,
            link: `/services/${service._id}`,
        };
    });

    // console.log("footer__menu", services);

    return (
        <footer className={style.wrap}>
            <div className={style.container}>
                <FooterInfo />
                <FooterMenu data={services} title="Услуги" />
                <FooterMenu data={about} title="О клинике" />
                <FooterContacts />
            </div>
            <FooterBottom />
        </footer>
    );
};

export * from "./FooterBottom";
export * from "./FooterContacts";
export * from "./FooterInfo";
export * from "./FooterMenu";
export * from "./FooterTitle";
