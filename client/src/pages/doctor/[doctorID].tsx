import style from './index.scss';
import React, {useEffect} from 'react';
import {useRouter} from 'next/router';
import {useDispatch, useSelector} from 'react-redux';
import {fetchDoctor, toggleFormSign} from '@redux/actions';
import {Title, Button, Spinner, ErrorBoundary} from '@components/atoms';
import {useReset} from '@components/template/resetToggle';
import {Layout} from '@components/template';

const Doctor = () => {
    const router = useRouter();
    const {doctorID} = router.query;
    const {aboutID} = router.query;
    const url: string = `http://localhost/doctor/${aboutID}`;
    const dispatch = useDispatch();
    useReset(dispatch);
    useEffect((): any => dispatch(fetchDoctor(url)), [url, dispatch]);
    const fetchDoctorInfo = useSelector((store: any) => store.fetchDoctor);
    const {name, position, achievement, education, photosId, about} = fetchDoctorInfo.doctor;
    const isLoading = fetchDoctorInfo.doctorIsLoading;
    const arr = [{title: 'Главная', link: '/'}, {title: 'Врачи', link: '/doctor'}, {title: name, link: '/doctor'}];
    console.log(doctorID);
    return(
        <Layout title={'Это тайтл'} description={'Это дескрипшен'} keywords={'Это ключевое слово'} breadcrumbs={arr}>
            {isLoading ? <Spinner/> :
            <ErrorBoundary>
                <Title text={name}/>
                <div className={style.wrap}>
                    <div className={style.textWrap}>
                        <span className={style.title}>{position}</span>
                        {achievement.map((item: string, index: number) => <span className={style.desc} key={index}>{item}</span>)}
                        <span className={style.title}>Образование</span>
                        {education.map((item: string, index: number) => <span className={style.desc} key={index}>{item}</span>)}
                        <span className={style.desc}>{about}</span>
                    </div>
                    <div className={style.photoWrap}>
                        <img className={style.img} src={photosId.src} alt={name} />
                        <Button text={'Записаться на прием'} onClick={() => dispatch(toggleFormSign(true))}/>
                    </div>
                </div>
            </ErrorBoundary>}
        </Layout>
    );
};

export default Doctor;
