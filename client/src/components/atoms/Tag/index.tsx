import style from './index.scss';
import React from 'react';
import Link from 'next/link';
import { ILink } from '@interfaces';

export const Tag = (props: ILink) => {
	const { title, link } = props;
	return (
		<Link href={link}>
			<a className={style.tag}>{title}</a>
		</Link>
	);
};
