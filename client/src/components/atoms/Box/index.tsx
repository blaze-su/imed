import React from "react";
import style from "./index.scss";

interface IProps {
    children: any;
}

export const Box = ({ children }: IProps) => (
    <section className={style.box}>{children}</section>
);
