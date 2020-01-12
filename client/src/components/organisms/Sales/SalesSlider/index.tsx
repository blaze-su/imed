import css from './index.scss';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import { fetchSales } from '@redux/actions';
import { Sale, ISale } from '../Sale';
import { ArrowNext, ArrowPrev, Spinner } from '@components/atoms';

const settings = {
	dots: false,
	infinite: true,
	slidesToScroll: 1,
	slidesToShow: 4,
	nextArrow: <ArrowNext isBanner={false} />,
	prevArrow: <ArrowPrev isBanner={false} />,
	speed: 300,
	responsive: [
		{
			breakpoint: 769,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 541,
			settings: {
				dots: true,
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
};

export const SalesSlider = () => {
	const url: string = 'http://localhost:3000/api/promos';
	const dispatch = useDispatch();
	useEffect((): any => dispatch(fetchSales(url)), [url, dispatch]);
	const salesReducer = useSelector((store: any) => store.salesReducer);
	const { sales, salesIsLoading } = salesReducer;
	
	return (
		<div className={css.wrap}>
			{salesIsLoading ? (
				<Spinner />
			) : (
				<Slider ref={slider => slider} {...settings}>
					{sales.map((item: ISale) => (
						<div className={css.item}>
							<Sale {...item} key={item._id} />
						</div>
					))}
				</Slider>
			)}
		</div>
	);
};
