import css from './index.scss';
import React from 'react';
import dynamic from 'next/dynamic';
import { Layout } from '@components/template';
import { Title } from '@components/atoms';

const BannerSliderDynamic = dynamic((): any =>
	import('@components/organisms').then(mod => mod.BannerSlider)
);
const FeedbackSliderDynamic = dynamic((): any =>
	import('@components/organisms').then(mod => mod.FeedbackSlider)
);
const DoctorsSliderDynamic = dynamic((): any =>
	import('@components/organisms').then(mod => mod.DoctorsSlider)
);
const SalesSliderDynamic = dynamic((): any =>
	import('@components/organisms').then(mod => mod.SalesSlider)
);
const RatingDynamic = dynamic((): any =>
	import('@components/organisms').then(mod => mod.Rating)
);
const AboutDynamic = dynamic((): any =>
	import('@components/organisms').then(mod => mod.About)
);

const Index = () => {
	return (
		<Layout
			title={'Это тайлтл'}
			description={'Это дескрипшен'}
			keywords={'Это ключевое слово'}
			breadcrumbs={null}
		>
			<BannerSliderDynamic />
			<Title text={'Акции'} />
			<section className={css.style}>
				<SalesSliderDynamic />
			</section>
			<Title text={'Врачи'} />
			<section>
				<DoctorsSliderDynamic />
			</section>
			<Title text={'О центре'} />
			<section>
				<AboutDynamic />
			</section>
			<FeedbackSliderDynamic />
			<Title text={'Рейтинг клиники в сервисах'} />
			<section>
				<RatingDynamic />
			</section>
		</Layout>
	);
};

export default Index;