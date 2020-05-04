import style from './headerDesktop.scss';
import css from './headerMobile.scss';
import React, { Fragment } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFormSign } from '@redux/actions';
import {
	Button,
	Burger,
	Logo,
	Telephone,
	Address,
	Search
} from '@components/atoms';
import { SocialLinks, Menu } from '@components/molecules';
import { FormSignUp, ModalForm } from '@components/organisms';

const onSubmit = (formData: any) => {
	console.log('Form send');
	console.log(formData);
};

const HeaderDesktop = () => {
	const dispatch = useDispatch();
	return (
		<Fragment>
			<header className={style.header}>
				<div className={style.top}>
					<Address />
					<Telephone />
				</div>
				<div className={style.wrap}>
					<Logo />
					<div className={style.center}>
						<Menu />
						<Search onSubmit={onSubmit} />
					</div>
					<Button
						text="Записаться на прием"
						onClick={() => dispatch(toggleFormSign(true))}
					/>
				</div>
			</header>
			<div className={style.clear} />
		</Fragment>
	);
};

const HeaderMobile = () => {
	const dispatch = useDispatch();
	const active = useSelector(
		(store: any) => store.mobileMenuReducer.toggleMobileMenu
	);
	return (
		<Fragment>
			<header className={css.mobile}>
				<Logo />
				<Search />
				<Burger />
			</header>
			<div className={css.clearMobile} />
			{active ? (
				<div className={css.menu}>
					<ul className={css.menuList}>
						<li className={css.menuItem}>
							<Link href="/about/photo">
								<a>Клиника</a>
							</Link>
						</li>
						<li className={css.menuItem}>
							<Link href="/services">
								<a>Услуги</a>
							</Link>
						</li>
						<li className={css.menuItem}>
							<Link href="/actions">
								<a>Акции</a>
							</Link>
						</li>
						<li className={css.menuItem}>
							<Link href="/doctors">
								<a>Врачи</a>
							</Link>
						</li>
						<li className={css.menuItem}>
							<Link href="/educationList">
								<a>Обучение</a>
							</Link>
						</li>
						<li className={css.menuItem}>
							<Link href="/contacts">
								<a>Контакты</a>
							</Link>
						</li>
					</ul>
					<Button
						text="Записаться на прием"
						onClick={() => dispatch(toggleFormSign(true))}
					/>
					<Telephone />
					<Address />
					<SocialLinks />
				</div>
			) : null}
		</Fragment>
	);
};

export const Header = () => {
	const active = useSelector(
		(store: any) => store.formReducer.formSignActive
	);
	return (
		<Fragment>
			{typeof window !== 'undefined' ? (
				document.documentElement.clientWidth > 769 ? (
					<HeaderDesktop />
				) : (
					<HeaderMobile />
				)
			) : (
				<HeaderDesktop />
			)}
			{active ? (
				<ModalForm>
					<FormSignUp
						initialValues={{ confidentPolitic: 'checked' }}
						onSubmit={onSubmit}
					/>
				</ModalForm>
			) : null}
		</Fragment>
	);
};
