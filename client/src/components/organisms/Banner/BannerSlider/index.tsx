import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { HOST_API } from "@keys"
import { IPhoto } from '@interfaces';
import Slider from 'react-slick';
import { Spinner } from '@components/atoms';
import { fetchBanners } from '@redux/actions';
import style from './BannerSlider.module.scss';

export interface IBanner {
	_id: string;
	alt?: string;
	title: string;
	text: string;
	photo: IPhoto | string;
}

const settings = {
	dots: true,
	infinite: true,
	slidesToScroll: 1,
	slidesToShow: 1,
	speed: 300,
	responsive: [
		{
			breakpoint: 541,
			settings: {
				dots: false
			}
		}
	]
};

export const BannerSlider = () => {
	const url: string = `${HOST_API}/banners`;

	const dispatch = useDispatch();
	useEffect((): any => dispatch(fetchBanners(url)), [url, dispatch]);
	const bannerReducer = useSelector((store: any) => store.bannerReducer);
	const { banners, bannerIsLoading } = bannerReducer;

	return (
		<section className={style.bannerWrap}>
			{bannerIsLoading ? (
				<Spinner />
			) : (
				<Slider ref={slider => slider} {...settings}>
					{banners.map(({ alt, title, text, _id, photo }: IBanner) => (
						<div className={style.item} key={_id}>
							<div className={style.info}>
								<h1 className={style.title}>{title}</h1>
								<p className={style.desc}>{text}</p>
							</div>
							<img
								className={style.img}
								src={ typeof photo === 'string' ? photo : photo.src }
								alt={alt}
								title={title}
							/>
						</div>
					))}
				</Slider>
			)}
		</section>
	);
};

