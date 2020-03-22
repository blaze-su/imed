import React from "react";
import style from "./index.scss";

interface IProps {
    isOpen: boolean;
}

export const IsOpenMarker = ({ isOpen }: IProps) => (
    <div className={ isOpen === false ? style.close : style.open }></div>
);
