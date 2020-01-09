import style from './index.scss';
import React from 'react';

interface IArrow {
	isBanner: boolean;
	className?: string;
	style?: any;
	onClick?: any;
}

export const ArrowNext = (props: IArrow) => (
	<div className={style.next} onClick={props.onClick} />
);
export const ArrowPrev = (props: IArrow) => (
	<div className={style.prev} onClick={props.onClick} />
);
