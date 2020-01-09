import { useDispatch } from 'react-redux';
import style from './index.scss';
import React from 'react';
import { toggleFormFeedback } from '@redux/actions';
import { Field, reduxForm } from 'redux-form';
import { Button } from '@components/atoms';
import {
	required,
	minLength,
	maxLength,
	phoneLength,
	normalizePhone,
	normalizeName
} from '@components/template/validation';

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
