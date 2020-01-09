import style from './index.scss';
import React, { Fragment, ReactElement, useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
	toggleFormSign,
	toggleFormVacancy,
	toggleFormFeedback,
	toggleFormSeminar
} from '@redux/actions';

interface IForm {
	title?: string;
	children: ReactElement;
}

export const ModalForm = (props: IForm) => {
	const dispatch = useDispatch();
	const bg = useRef(null);
	return (
		<Fragment>
			<div
				className={style.bg}
				ref={bg}
				onClickCapture={event => {
					if (event.target === bg.current) {
						dispatch(toggleFormSign(false));
						dispatch(toggleFormVacancy(false));
						dispatch(toggleFormFeedback(false));
						dispatch(toggleFormSeminar(false));
					}
				}}
			>
				{props.children}
			</div>
		</Fragment>
	);
};
