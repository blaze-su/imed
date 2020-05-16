import React, {useEffect} from 'react';
import style from './index.scss';
import {useDispatch, useSelector} from 'react-redux';
import {fetchFeedbacks} from '@redux/actions';
import {Title, Feedback, IFeedback, Spinner} from '@components/atoms';
import {useReset} from '@components/template/resetToggle';
import {Layout} from '@components/organisms/Layout';
import { HOST_API } from "@keys";


const url: string = `${HOST_API}/reviews`;
const Feedbacks = () => {
    const dispatch = useDispatch();
    useReset(dispatch);
    useEffect((): any => dispatch(fetchFeedbacks(url)), [url, dispatch]);
    const feedbackReducer = useSelector((store: any) => store.feedbackReducer);
    const { feedbacks, feedbackIsLoading } =  feedbackReducer;

    return (
        <Layout title={'Это тайлтл'} description={'Это дескрипшен'} keywords={'Это ключевое слово'} breadcrumbs={[{title: 'Главная', link: '/'}, {title: 'Отзывы', link: '/Feedback'}]}>
            <Title text={'Отзывы'}/>
            <section>
                {feedbackIsLoading ? <Spinner/> :
                    <div className={style.list}>
                        {feedbacks.map((item: IFeedback) => <Feedback {...item} key={item._id}/>)}
                    </div>}
            </section>
        </Layout>
    );
};

export default Feedbacks;