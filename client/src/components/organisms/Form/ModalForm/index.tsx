import React, { Fragment, ReactElement, useRef } from 'react';
import {
	toggleFormDefault,
	toggleFormFeedback,
	toggleFormSeminar,
	toggleFormVacancy
} from '@redux/actions';

import style from './ModalForm.module.scss';
import { useDispatch } from 'react-redux';

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
						dispatch(toggleFormDefault(false));
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
