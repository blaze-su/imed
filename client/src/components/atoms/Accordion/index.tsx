import React, { useState } from 'react';
import Link from 'next/link';
import css from './index.scss';

interface ILink {
	title: string;
	link: string;
	_id?: string;
}

interface IAccordion {
	link: {
		anchor: string;
		url: string;
	};
	innerList: ILink[];
}

export const Accordion = (props: IAccordion) => {
	const [active, toggleActive] = useState(false);
	const { link, innerList } = props;
	return (
		<div className={css.wrapper}>
			<div className={css.item} onClick={() => toggleActive(!active)}>
				<span className={css.title}>{link.anchor}</span>
				<div className={active ? css.crossActive : css.cross} />
			</div>
			<ul className={active ? css.innerListActive : css.innerList}>
				{innerList.map(({ title, link, _id }: ILink) => (
					<Link href={link} key={_id}>
						<a className={css.innerItem}>{title}</a>
					</Link>
				))}
			</ul>
		</div>
	);
};
