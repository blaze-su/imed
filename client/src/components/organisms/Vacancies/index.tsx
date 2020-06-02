import { FormVacancy, ModalForm } from '@components/organisms';
import React, { useEffect } from 'react';
import { fetchVacancies, toggleFormVacancy } from '@redux/actions';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '../../atoms/Button';
import { HOST_API } from "@keys";
import { Spinner } from '@components/atoms';
import css from './Vacancies.module.scss';

export const Vacancies = () => {
	const url: string = `${HOST_API}/vacancies`;
	const dispatch = useDispatch();
	const formIsActive = useSelector(
		(store: any) => store.formReducer.formVacancyActive
	);
	useEffect((): any => dispatch(fetchVacancies(url)), [url, dispatch]);
	const fetchVacanciesList = useSelector(
		(store: any) => store.fetchVacancies
	);
	const { vacancies, vacanciesIsLoading } = fetchVacanciesList;
	console.log(fetchVacanciesList);
	return (
		<div>
			<span className={css.text}>
				Наш центр заинтересован в притоке высококвалифицированных
				специалистов.
			</span>
			<h3 className={css.title}>Мы ищем: </h3>
			<div className={css.vacanciesList}>
				{vacanciesIsLoading ? (
					<Spinner />
				) : (
					vacancies.map(
						({ title, _id }: { title: string; _id: string }) => (
							<span className={css.vacancy} key={_id}>
								{title}
							</span>
						)
					)
				)}
			</div>
			<span className={css.text}>
				Если у вас имеется опыт работы и соответствующее профильное
				образование. Отправляйте свое резюме заполнив форму ниже, а
				также Вы можете направить по адресу электронной почты:
			</span>
			<div className={css.wrap}>
				<a className={css.link} href="mailto:info@almameds.ru">
					info@almameds.ru
				</a>
				<span className={css.text}> с пометкой «Вакансия»,</span>
			</div>
			<div className={css.wrap}>
				<span className={css.text}>
					или связаться с нами по номеру телефона{' '}
				</span>
				<a className={css.link} href="tel:+79181111414">
					+7(918)111-14-14
				</a>
			</div>
			<Button
				text={'Остправить резюме'}
				onClick={() => dispatch(toggleFormVacancy(true))}
			/>
			{formIsActive ? (
				<ModalForm>
					<FormVacancy
						initialValues={{
							file: '',
							confidentPolitic: 'checked'
						}}
					/>
				</ModalForm>
			) : null}
		</div>
	);
};
