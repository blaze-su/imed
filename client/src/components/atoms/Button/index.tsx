import React from 'react';
import style from './Button.module.scss';

export interface IButton {
    text: string;
    type?: 'white';
    onClick: any;
}

export const Button = (props: IButton) => {
    const { text, type, onClick } = props;
    if (type === 'white') {
        return <button className={style.btnWhite} onClick={onClick}>{text}</button>;
    }

    return <button className={ style.btn} onClick={onClick}>{text}</button>;
};
