import { Field, reduxForm } from 'redux-form';
import {
	maxLength,
	minLength,
	normalizeName,
	normalizePhone,
	phoneLength,
	required,
	upper
} from '@components/template/validation';

import { Button } from '@components/atoms';
import React from 'react';
import style from './FormVacancy.module.scss';
import { toggleFormVacancy } from '@redux/actions';
import { useDispatch } from 'react-redux';

const minLength2 = minLength(2);
const maxLength30 = maxLength(30);
const maxLength50 = maxLength(50);

const Form = (props: any) => {
	const FileInput = () => <input type="file" />;
	const dispatch = useDispatch();
	return (
		<form className={style.form} onSubmit={props.handleSubmit}>
			<div
				className={style.close}
				onClick={() => dispatch(toggleFormVacancy(false))}
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
			<label className={style.label} htmlFor="position">
				Укажите должность *
				<Field
					className={style.input}
					name={'position'}
					require={'true'}
					type={'tel'}
					validate={[required, minLength2, maxLength30]}
					component={'input'}
				/>
			</label>
			<label className={style.label} htmlFor="message">
				Напишите сообщение
				<Field
					className={style.input}
					name={'message'}
					resize={'none'}
					normalize={upper}
					validate={[required, minLength2, maxLength50]}
					component={'textarea'}
				/>
			</label>
			<label className={style.label} htmlFor="file">
				Прикрепить резюме
				<Field
					className={style.document}
					name={'file'}
					component={FileInput}
				/>
			</label>
			<Button text={'Отправить'} onClick={() => console.log(213)} />
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

export const FormVacancy = reduxForm({
	form: 'vacancy'
})(Form);
