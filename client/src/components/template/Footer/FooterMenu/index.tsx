import style from './index.scss';
import React from 'react';
import { FooterTitle as Title } from '../FooterTitle';
import { ILink } from '@interfaces';

interface IProps {
	data: Array<ILink>;
	title: string;
}

const Item = (props: ILink) => (
	<a href={props.link} className={style.item}>
		{props.title}
	</a>
);

export const FooterMenu = (props: IProps) => {
	const { data, title } = props;
	return (
		<div className={style.wrap}>
			<Title text={title} />
			<ul className={style.list}>
				{data.map((item: ILink) => (
					<Item {...item} key={item._id} />
				))}
			</ul>
		</div>
	);
};
