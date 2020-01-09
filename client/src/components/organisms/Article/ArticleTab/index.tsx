import style from './index.scss';
import React from 'react';
import { IArticle } from '@components/organisms/Article';

export const ArticleTab = (props: IArticle) => {
	const { title, describe, photos } = props;
	return (
		<div className={style.wrap}>
			<div>
				<h2 className={style.title}>{title}</h2>
				<div className={style.container}>
					<p className={style.desc}>{describe}</p>
					{photos === null ? (
						''
					) : (
						<img
							className={style.img}
							src={photos.src}
							alt={title}
						/>
					)}
				</div>
			</div>
		</div>
	);
};