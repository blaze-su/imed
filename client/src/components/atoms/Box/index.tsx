import React from "react";
import style from "./Box.module.scss";

interface IProps {
    children: any;
}

export const Box = ({ children }: IProps) => {
    return <section className={style.box}>{children}</section>
}
