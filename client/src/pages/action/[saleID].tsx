import css from './index.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSale, toggleFormSign } from '@redux/actions';
import { ErrorBoundary, Button, Spinner, Title } from '@components/atoms';
import { SalesSlider } from '@components/organisms';
import { useReset } from '@components/template/resetToggle';
import { Layout } from '@components/template';

const Sale = () => {
	const router = useRouter();
	const { saleID } = router.query;
	const url: string = `http://localhost:3000/api/promos/${saleID}`;
	const dispatch = useDispatch();
	useReset(dispatch);
	useEffect((): any => dispatch(fetchSale(url)), [url, dispatch]);
	const saleReducer = useSelector((store: any) => store.saleReducer);
	const { sale, saleIsLoading } = saleReducer;
	return (
		<Layout
			title={'Это тайтл'}
			description={'Это дескрипшен'}
			keywords={'Это ключевое слово'}
			breadcrumbs={null}
		>
			{saleIsLoading ? (
				<Spinner />
			) : (
				<ErrorBoundary>
					<Title text={sale.title} />
					<section>
						<div className={css.wrap}>
							<div className={css.textWrap}>
								<p className={css.desc}>{sale.offer}</p>
								<p className={css.desc}>
									Консультативные приемы и занятия проводит:
								</p>
								<p className={css.name} key={sale._id}>
									<Link href={`/doctor ${saleID}`}>
										<a>{sale.name}</a>
									</Link>
								</p>
								<p className={css.aboutService}>
									{sale.description}
								</p>
								<p className={css.detail}>
									{' '}
									Узнать подробности об акции можно по
									телефону &nbsp;
									<strong>
										<a href="tel:+79181111114">
											8(918)111-11-14
										</a>
									</strong>
								</p>
								<p className={css.date}>{sale.endDate}</p>
								<Button
									text={'Записаться'}
									onClick={() =>
										dispatch(toggleFormSign(true))
									}
								/>
							</div>
							<img
								className={css.img}
								src={sale.photosId.src}
								alt={sale.title}
							/>
						</div>
					</section>
					<section>
						<h2 className={css.title}>Рекомендуем посмотреть</h2>
						<SalesSlider />
					</section>
				</ErrorBoundary>
			)}
		</Layout>
	);
};

export default Sale;
