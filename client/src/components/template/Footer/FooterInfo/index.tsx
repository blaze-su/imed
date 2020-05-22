import { Logo } from '@components/atoms';
import React from 'react';
import style from './FooterInfo.module.scss';

export const FooterInfo = () => {
	return (
		<div className={style.wrap}>
			<div className={style.logo}>
				<Logo />
			</div>
			<span className={style.info}>г.Краснодар, </span>
			<span className={style.info}>ул. Красных партизан, д.66</span>
			<span className={style.time}>Пн-Сб c 9:00 до 21:00 </span>
			<span className={style.time}>Вс c 9:00 до 17:00</span>
		</div>
	);
};
