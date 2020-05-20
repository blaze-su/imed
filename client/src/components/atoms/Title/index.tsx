import style from "./Title.module.scss";
import React from "react";
import { ITitle } from "@interfaces";

export const Title = (props: ITitle) => {
    const { text, type } = props;
    if (type === "white") {
        return <h2 className={style.titleWhite}>{text}</h2>;
    }
    return <h2 className={style.title}>{text}</h2>;
};
