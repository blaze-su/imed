import style from './index.scss';
import React from 'react';
import { FooterInfo, FooterMenu, FooterBottom, FooterContacts } from '@components/template/Footer'
import { ILink } from '@interfaces';

const services: Array<ILink> = [
    {_id: '98H45G', title: 'Косметология', link: '/cosmetology'},
    {_id: '98H45F', title: 'Массаж', link: '/massage'},
    {_id: '98H45D', title: 'Мануальная терапия', link: '/therapy'},
    {_id: '98H45S', title: 'Лечебная гимнастика', link: '/gymnastics'},
    {_id: '98H45U', title: 'Остеопатия', link: '/osteopath'}
];

const about: Array<ILink> = [
    {_id: '98H45T', title: 'Клиника', link: '/about'},
    {_id: '98H45U', title: 'Врачи', link: '/doctors'},
    {_id: 'Q8H45U', title: 'Акции', link: '/sales'},
    {_id: 'W8H45U', title: 'Обучение', link: '/educationList'},
    {_id: 'E8H45U', title: 'Контакты', link: '/contacts'},
    {_id: 'R8H45U', title: 'Вакансии', link: '/vacancies'},
    {_id: 'T8H45U', title: 'Статьи', link: '/articles'}
];

export const Footer = () => {
    return (
        <footer className={style.wrap}>
            <div className={style.container}>
                <FooterInfo/>
                <FooterMenu data={services} title='Услуги'/>
                <FooterMenu data={about} title='О клинике'/>
                <FooterContacts/>
            </div>
            <FooterBottom/>
        </footer>
    );
};

export * from './FooterBottom'
export * from './FooterContacts'
export * from './FooterInfo'
export * from './FooterMenu'
export * from './FooterTitle'
