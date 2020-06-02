import { useDispatch, useSelector } from 'react-redux';

import React from 'react';
import styles from './Burger.module.scss';
import { toggleMobileMenu } from '@redux/actions';

export const Burger = () => {
	const active = useSelector(
		(store: any) => store.mobileMenuReducer.toggleMobileMenu
	);
	const dispatch = useDispatch();

	return (
		<div
			className={active ? styles.burgerActive : styles.burger}
			onClick={() => dispatch(toggleMobileMenu(!active))}
		>
			<span />
		</div>
	);
};
