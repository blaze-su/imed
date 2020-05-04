import React from "react";
import { Link } from "react-router-dom";
import style from "./index.module.scss";

interface IProps {
    _id: string;
    title: string;
}

export const ArticleList = ({ _id, title }: IProps) => {
    const url = `/articles/${_id}`;
    return (
        <div className={style.box}>
            <Link to={url}>{title}</Link>
        </div>
    );
};
