import style from './index.scss';
import { Field, reduxForm } from 'redux-form';
import { useDispatch } from 'react-redux';
import React from 'react';
import { Button } from '@components/atoms';
import { toggleFormSign } from '@redux/actions';
import {
	required,
	minLength,
	maxLength,
	phoneLength,
	upper,
	normalizePhone,
	normalizeName
} from '@components/template/validation';

const minLength2 = minLength(2);
const maxLength30 = maxLength(30);

const Form = (props: any) => {
	const dispatch = useDispatch();

	return (
		<form className={style.form} onSubmit={props.handleSubmit}>
			<div
				className={style.close}
				onClick={() => dispatch(toggleFormSign(false))}
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
			<label className={style.label} htmlFor="email">
				Укажите электронную почту *
				<Field
					className={style.input}
					name={'email'}
					placeholder={'Ivanov.I.S@g-mail.com'}
					require={'true'}
					type={'email'}
					normalize={upper}
					validate={[required, minLength2, maxLength30]}
					component={'input'}
				/>
			</label>
			<Button
				text={'Отправить'}
				onClick={() => console.log('Отправить форму')}
			/>
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

export const FormSignUp = reduxForm({
	form: 'signup'
})(Form);
