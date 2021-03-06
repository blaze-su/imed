import React, { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IPhoto } from '@interfaces';
import { Spinner } from '@components/atoms';
import { fetchPhoto } from '@redux/actions';
import style from './GalleryPhoto.module.scss';

export const GalleryPhoto = (props: { url: string }) => {
	const dispatch = useDispatch();
	useLayoutEffect((): any => dispatch(fetchPhoto(props.url)), [
		props.url,
		dispatch
	]);
	const photoReducer = useSelector((store: any) => store.photoReducer);
	const { photos, photosIsLoading } = photoReducer;

	return photosIsLoading ? (
		<Spinner />
	) : (
		<div className={style.wrap}>
			{photos.map(({ _id, src }: IPhoto) => (
				<img className={style.img} src={src} alt="" key={_id} />
			))}
		</div>
	);
};
