import { Field, reduxForm } from 'redux-form';
import {
	maxLength,
	minLength,
	normalizeName,
	normalizePhone,
	phoneLength,
	required
} from '@components/template/validation';

import { Button } from '@components/atoms';
import React from 'react';
import style from './FormFeedback.module.scss';
import { toggleFormFeedback } from '@redux/actions';
import { useDispatch } from 'react-redux';

const minLength2 = minLength(2);
const maxLength30 = maxLength(30);
const maxLength50 = maxLength(50);

const Form = (props: any) => {
	const dispatch = useDispatch();
	return (
		<form className={style.form} onSubmit={props.handleSubmit}>
			<div
				className={style.close}
				onClick={() => dispatch(toggleFormFeedback(false))}
			>
				&times;
			</div>
			<span className={style.title}>Записаться на прием</span>
			<label className={style.label} htmlFor="name">
				Напишите как к Вам обращаться *
				<Field
					className={style.input}
					name={'name'}
					placeholder={'Иван Васильевич'}
					require={'true'}
					type={'text'}
					normalize={normalizeName}
					validate={[required, minLength2, maxLength30]}
					component={'input'}
				/>
			</label>
			<label className={style.label} htmlFor="phone">
				Укажите № контактного телефона *
				<Field
					className={style.input}
					name={'phone'}
					placeholder={'+7('}
					require={'true'}
					type={'tel'}
					normalize={normalizePhone}
					validate={[required, phoneLength]}
					component={'input'}
				/>
			</label>
			<label className={style.label} htmlFor="notes">
				Напишите отзыв
				<Field
					className={style.input}
					name={'notes'}
					resize={'none'}
					component={'textarea'}
					validate={maxLength50}
				/>
			</label>
			<Button text={'Отправить'} onClick={() => console.log(546)} />
			<label className={style.confident}>
				<Field
					className={style.checkbox}
					name={'confidentPolitic'}
					type={'checkbox'}
					component={'input'}
				/>
				<span>
					Подтверждаю свое согласие на обработку и хранение моих
					персональных данных в соответствии с
					<a href={'/'} className={style.confidentLink}>
						{' '}
						пользовательским соглашением
					</a>
				</span>
			</label>
		</form>
	);
};

export const FormFeedback = reduxForm({
	form: 'feedback'
})(Form);
