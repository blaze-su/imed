import css from './index.scss';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {IDoctor} from '../../components/molecules/Doctor';
import Doctor from '../../components/molecules/Doctor';
import Spinner from '../../components/atoms/Spinner';
import Title from '../../components/atoms/Title';
import {fetchDoctors} from '../../redux/actions';
import useReset from '../../components/template/resetToggle';
import Layout from '../../components/organisms/Layout';

const Doctors = () => {

    const url: string = 'http://localhost/doctors/id';
    const dispatch = useDispatch();
    useReset(dispatch);
    useEffect((): any => dispatch(fetchDoctors(url)), [url, dispatch]);
    const fetchDoctor = useSelector((store: any) => store.fetchDoctors);
    const doctorList = fetchDoctor.doctor.doctorList;
    const isLoading = fetchDoctor.doctorsIsLoading;
    const title = fetchDoctor.doctor.title;

    return(
        <Layout title={'Это тайлтл'} description={'Это дескрипшен'} keywords={'Это ключевое слово'} breadcrumbs={null}>
            <Title text={title}/>
            <section className={css.wrap}>
                {isLoading ? <Spinner/> : doctorList.map((item: IDoctor) => <Doctor {...item} key={item._id}/>)}
            </section>
        </Layout>
    );
};

export default Doctors;
