import style from './index.scss';
import {useRouter} from 'next/router';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import GalleryPhoto from '../../components/molecules/GalleryPhoto';
import GalleryVideo from '../../components/molecules/GalleryVideo';
import ErrorBoundary from '../../components/atoms/ErrorBoundary';
import Vacancies from '../../components/molecules/Vacancies';
import useReset from '../../components/template/resetToggle';
import Layout from '../../components/organisms/Layout';
import Spinner from '../../components/atoms/Spinner';
import Tabs from '../../components/organisms/Tabs';
import Title from '../../components/atoms/Title';
import {fetchAbout} from '../../redux/actions';

const About = () => {
    const router = useRouter();
    const {aboutID} = router.query;
    const url: string = `https://kasparov-store.ru/About.json`;
    const dispatch = useDispatch();
    useReset(dispatch);
    useEffect((): any => dispatch(fetchAbout(url)), [url, dispatch]);
    const fetchAboutPage = useSelector((store: any) => store.fetchAbout);
    const {title, text, photo} = fetchAboutPage.about;
    const isLoading = fetchAboutPage.aboutIsLoading;
    let currentTarget = null;
    aboutID === 'photo' ?  currentTarget = 0 :
        aboutID === 'video' ?  currentTarget = 1 :
            aboutID === 'vacancy' ?  currentTarget = 2 : currentTarget = 0;
    return(
        <Layout title={title ||'О центре'} description={'Информация о нашем центре'} keywords={'Kek'} breadcrumbs={[{title: 'Главная', link: '/'}, {title: 'О центре', link: '/about'}]}>
            {isLoading ? <Spinner/> :
            <ErrorBoundary>
                <Title text={title}/>
                <section>
                    <div className={style.wrap} >
                        <div className={style.text}>
                            {text.map((item: string, index: number) => <p key={style.text + index}>{item}</p>)}
                        </div>
                        <img className={style.img} src={photo.src} alt={title} title={title} />
                    </div>
                </section>
                <section>
                    <Tabs currentTab={currentTarget} links={['Фото', 'Видео', 'Вакансии']} >
                        <GalleryPhoto url={'http://localhost:8000/uploads'}/>
                        <GalleryVideo url={'https://kasparov-store.ru/Video.json'} />
                        <Vacancies/>
                    </Tabs>
                </section>
            </ErrorBoundary>}
        </Layout>
    );
};

export default About;
