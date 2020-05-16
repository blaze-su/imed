import css from './index.scss';
import {useRouter} from 'next/router';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ErrorBoundary from '../../components/atoms/ErrorBoundary';
import {Pagination} from '../../components/atoms/Pagination';
import MenuSide from '../../components/molecules/MenuSide';
import Article, {IArticle} from '../../components/molecules/Article';
import Spinner from '../../components/atoms/Spinner';
import Title from '../../components/atoms/Title';
import {fetchArticles} from '../../redux/actions';
import useReset from '../../components/template/resetToggle';
import Layout from '../../components/organisms/Layout';
import {ParsedUrlQuery} from 'querystring';
import { HOST_API } from "@keys";

const breadcrumbs = [
    {title: 'Главная', link: '/'},
    {title: 'Статьи', link: '/aricles'}
];

const Articles = () => {
    const router = useRouter();
    const {articlesID}: ParsedUrlQuery = router.query;
    const articlesPerPage: number = 5;
    const url: string = `${HOST_API}/articles`;
    const dispatch = useDispatch();
    useReset(dispatch);
    useEffect((): any => dispatch(fetchArticles(url)), [url, dispatch]);
    const fetchArticlesList = useSelector((store: any) => store.fetchArticles);
    const {articles, articlesIsLoading} = fetchArticlesList;
    const pages = articles
        .slice(0, Math.ceil(articles.length / articlesPerPage))
        .map((_item: any, index: number) => `/articles/${index + 1}`);
    return (
        <Layout title={'Статьи'} description={'Описание'} keywords={'keywords'} breadcrumbs={breadcrumbs}>
            <Title text={'Статьи'}/>
            <section className={css.section}>
                <MenuSide/>
                <div className={css.wrap}>
                    <ErrorBoundary>
                        {articlesIsLoading ? <Spinner/>
                            : articles
                                .slice((+articlesID - 1) * articlesPerPage, +articlesID * articlesPerPage)
                                .map((item: IArticle) => <Article {...item}/>)}
                    </ErrorBoundary>
                </div>
            </section>
            <div className={css.pagination}>
                <Pagination pages={pages} currentPage={+router.query}/>
            </div>
        </Layout>
    );
};

export default Articles;
