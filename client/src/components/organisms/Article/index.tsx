import React from 'react';
import Link from 'next/link';
import css from './index.scss';
import { Tag } from '@components/atoms';
import { IPhoto } from '@interfaces';

export interface IArticle {
	_id: string;
	title: string;
	describe: string;
	photos: IPhoto;
	tags: string[] | null;
}

export const Article = (props: IArticle) => {
	const { title, describe, photos, tags } = props;
	return (
		<Link href={'/'}>
			<a>
				<div className={css.item}>
					<div className={css.wrapper}>
						{tags !== null
							? tags.map(
									({ title, link }: any, index: number) => (
										<Tag
											title={title}
											link={link}
											key={index}
										/>
									)
							  )
							: ''}
						<h1 className={css.title}>{title}</h1>
						<p className={css.desc}>{describe}</p>
					</div>
					<img className={css.img} src={photos.src} alt={'123'} />
				</div>
			</a>
		</Link>
	);
};

export * from './ArticleTab'
