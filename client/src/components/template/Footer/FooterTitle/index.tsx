import React from 'react';
import style from './FooterTitle.module.scss';

export const FooterTitle = (props: {text: string}) => <h2 className={style.title}>{props.text}</h2>;

