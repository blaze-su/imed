import React, { useEffect } from 'react';
import Slider from 'react-slick';
import style from './index.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBanners } from '@redux/actions';
import { Spinner } from '@components/atoms';
import { IPhoto } from '@interfaces';

export interface IBanner {
	_id: string;
	alt?: string;
	title: string;
	desc: string;
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
	const url: string = 'http://localhost:3000/api/banners';

	const dispatch = useDispatch();
	useEffect((): any => dispatch(fetchBanners(url)), [url, dispatch]);
	const bannerReducer = useSelector((store: any) => store.bannerReducer);
	const { banners, bannerIsLoading } = bannerReducer;
	console.log("bannerReducer", bannerReducer);

	return (
		<div className={style.bannerWrap}>
			{bannerIsLoading ? (
				<Spinner />
			) : (
				<Slider ref={slider => slider} {...settings}>
					{banners.map(({ alt, title, desc, _id, photo }: IBanner) => (
						<div className={style.item} key={_id}>
							<div className={style.info}>
								<h1 className={style.title}>{title}</h1>
								<p className={style.desc}>{desc}</p>
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
		</div>
	);
};

