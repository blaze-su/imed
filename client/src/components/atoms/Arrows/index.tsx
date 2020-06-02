import React from 'react';
import style from './Arrows.module.scss';

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
