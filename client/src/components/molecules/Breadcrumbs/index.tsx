import css from './index.scss';
import React from 'react';
import Link from 'next/link';
import { ILink } from '@interfaces';

interface IProps {
	items: ILink[] | null;
}

export const Breadcrumbs = (props: IProps) => {
	const { items } = props;
	if (items === null) {
		return null;
	}
	const lastElement = items.length - 1;
	return (
		<div className={css.breadcrumbs}>
			{items.map(({ title, link }: ILink, index: number) =>
				index === lastElement ? (
					<Link href={link} key={css.linkActive + index}>
						<a className={css.linkActive}>{title}</a>
					</Link>
				) : (
					<Link href={link} key={css.link + index}>
						<a className={css.link}>
							{`${title}`}
							<span>&nbsp;/&nbsp;</span>
						</a>
					</Link>
				)
			)}
		</div>
	);
};
