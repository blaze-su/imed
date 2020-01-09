import css from './index.scss';
import {useRouter} from 'next/router';
import React, {useEffect, Fragment} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ModalForm from '../../components/molecules/ModalForm';
import {fetchEvent, fetchSchedule, fetchDesc, toggleFormSeminar, fetchDoctor} from '../../redux/actions';
import Layout from '../../components/organisms/Layout';
import Form from '../../components/atoms/FormSeminar';
import {Button} from '../../components/atoms/Button';
import Title from '../../components/atoms/Title';
import Spinner from '../../components/atoms/Spinner';
import Tabs from '../../components/organisms/Tabs';
import useReset from '../../components/template/resetToggle';

interface iArticle {
    _id: string;
    title: string;
    text: string;
}

const breadcrumb = [
    {title: 'Главная', link: '/'},
    {title: 'Центр осознанного здоровья', link: '/education'},
    {title: 'Базовый курс по кинезиотейпированию кт1-кт2', link: '/'}
];

const Desc = () => {
    const url: string = `https://kasparov-store.ru/Desc.json`;
    const dispatch = useDispatch();
    useEffect((): any => dispatch(fetchDesc(url)), [url, dispatch]);
    const fetchingDesc = useSelector((store: any) => store.fetchDesc);
    return (
        <div>
        {fetchingDesc.eventIsLoading ? <Spinner/> :
            fetchingDesc.desc.map(({title, text, _id}: iArticle) => (
                <Fragment key={_id}>
                    <h2 className={css.subTitle}>{title}</h2>
                    <p className={css.text}>{text}</p>
                </Fragment>
            ))
        }
        </div>
    )
};

const Shedule = () => {
    const url: string = `https://kasparov-store.ru/Shedule.json`;
    const dispatch = useDispatch();
    useEffect((): any => dispatch(fetchSchedule(url)), [url, dispatch]);
    const fetchSchedules = useSelector((store: any) => store.fetchSchedule);
    return (
        <div>
            {fetchSchedules.scheduleIsLoading ? <Spinner/> :
                fetchSchedules.schedule.map(({title, text, _id}: iArticle) => (
                    <Fragment key={_id}>
                        <h2 className={css.subTitle}>{title}</h2>
                        <p className={css.text}>{text}</p>
                    </Fragment>
                ))
            }
        </div>
    )
};

const Doctor = () => {
    const url: string = `https://kasparov-store.ru/Doctor.json`;
    const dispatch = useDispatch();
    useReset(dispatch);
    useEffect((): any => dispatch(fetchDoctor(url)), [url, dispatch]);
    const fetchDoctorInfo = useSelector((store: any) => store.fetchDoctor);
    const {name, specializationsId, achievement, education, photosId, about} = fetchDoctorInfo.doctor;
    const isLoading = fetchDoctorInfo.doctorIsLoading;
    return (
        isLoading ? <Spinner/> :
        <Fragment>
            <img className={css.DoctorImg} src={photosId.src} alt={name} />
            <div className={css.textWrap}>
                <h2 className={css.title}>{name}</h2>
                <div>
                    <span className={css.position}>{specializationsId.join(', ')} </span>
                </div>
                {achievement.map((item: string, index: number) => <span className={css.text} key={index}>{item}</span>)}
                <span className={css.position}>Образование</span>
                {education.map((item: string, index: number) => <span className={css.text} key={index}>{item}</span>)}
                <span className={css.text}>{about}</span>
            </div>
        </Fragment>
    )
};

const Education = () => {
    const router = useRouter();
    const {eventsID} = router.query;
    const url: string = `https://kasparov-store.ru/Event.json`;
    const dispatch = useDispatch();
    useEffect((): any => dispatch(fetchEvent(url)), [url, dispatch]);
    const fetchEvents = useSelector((store: any) => store.fetchEvent);
    const active = useSelector((store: any) => store.ReducerForm.formSeminarActive);
    const {title, description, date, keywords, text, time, price, place, photosId} = fetchEvents.event;
    console.log(eventsID);
    return (
        <Layout title={title} description={description} keywords={keywords} breadcrumbs={breadcrumb}>
            <Title text={title}/>
            {fetchEvents.eventIsLoading ? <Spinner/> :
            <section className={css.desc}>
                <div className={css.wrap}>
                    <h2 className={css.subTitle}>{date}</h2>
                    <p className={css.text}>{text}</p>
                    <h2 className={css.subTitle}>Место проведения: {place}</h2>
                    <h2 className={css.subTitle}>Время проведения: {time}</h2>
                    <h2 className={css.subTitle}>Цена {price}</h2>
                    <Button text={'Записаться'} onClick={() => dispatch(toggleFormSeminar(true))}/>
                </div>
                <img className={css.img} src={photosId.src} alt={title} title={title}/>
            </section>}
            <section>
                <Tabs  currentTab={0} links={['Описание', 'Расписание', 'Выступающий']}>
                    <Desc/>
                    <Shedule/>
                    <Doctor/>
                </Tabs>
            </section>
            {active ? <ModalForm><Form initialValues={{'confidentPolitic': 'checked'}} /></ModalForm> : null}
        </Layout>
    );
};

export default Education;
