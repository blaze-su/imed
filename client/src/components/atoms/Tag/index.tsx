import { ILink } from '@interfaces';
import Link from 'next/link';
import React from 'react';
import style from './Tag.module.scss';

export const Tag = (props: ILink) => {
	const { title, link } = props;
	return (
		<Link href={link}>
			<a className={style.tag}>{title}</a>
		</Link>
	);
};
