import style from './FooterTitle.module.index.scss';
import React from 'react';

export const FooterTitle = (props: {text: string}) => <h2 className={style.title}>{props.text}</h2>;

