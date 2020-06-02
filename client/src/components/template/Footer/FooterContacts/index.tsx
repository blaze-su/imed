import React from 'react';
import { SocialLinks } from '@components/molecules';
import { FooterTitle as Title } from '../FooterTitle';
import style from './FooterContacts.module.scss';

export const FooterContacts = () => {
	return (
		<div className={style.contacts}>
			<Title text={'Звонить'} />
			<a className={style.tel} href={'tel:+79181111414'}>
				+7(918)111-14-14
			</a>
			<Title text={'Писать'} />
			<a className={style.email} href={'mailto:info@intellect-medical.ru'}>
				info@intellect-medical.ru
			</a>
			<SocialLinks />
		</div>
	);
};
