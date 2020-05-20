import style from './FooterContacts.module.index.scss';
import React from 'react';
import { FooterTitle as Title } from '../FooterTitle';
import { SocialLinks } from '@components/molecules';

export const FooterContacts = () => {
	return (
		<div className={style.contacts}>
			<Title text={'Звонить'} />
			<a className={style.tel} href={'tel:+79181111414'}>
				+7(918)111-14-14
			</a>
			<Title text={'Писать'} />
			<a className={style.email} href={'mailto:info@almameds.ru'}>
				info@almameds.ru
			</a>
			<SocialLinks />
		</div>
	);
};
