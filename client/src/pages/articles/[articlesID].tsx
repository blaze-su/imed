import css from "./index.scss";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ParsedUrlQuery } from "querystring";
import { HOST_API } from "@keys";
import { useReset } from "@components/template/resetToggle";
import { fetchArticles } from "@redux/actions";
import { Layout } from "@components/template";
import { Title, ErrorBoundary, Spinner } from "@components/atoms";
import MenuSide from "@components/organisms/Catalog/MenuSide";
import { Article, IArticle } from "@components/organisms";
import { Pagination } from "@components/molecules";

const breadcrumbs = [
    { title: "Главная", link: "/" },
    { title: "Статьи", link: "/aricles" },
];

const Articles = () => {
    const router = useRouter();
    const { articlesID }: ParsedUrlQuery = router.query;
    const articlesPerPage: number = 5;

    const url: string = `${HOST_API}/articles`;
    const dispatch = useDispatch();
    useReset(dispatch);
    useEffect((): any => dispatch(fetchArticles(url)), [url, dispatch]);
    const articlesReducer = useSelector((store: any) => store.articlesReducer);

    if (articlesReducer === undefined) return null
    
    const { articles, articlesIsLoading } = articlesReducer;
    
    const pages = articles
        .slice(0, Math.ceil(articles.length / articlesPerPage))
        .map((_item: any, index: number) => `/articles/${index + 1}`);
    
    return (
        <Layout
            title={"Статьи"}
            description={"Описание"}
            keywords={"keywords"}
            breadcrumbs={breadcrumbs}
        >
            <Title text={"Статьи"} />
            <section className={css.section}>
                <MenuSide />
                <div className={css.wrap}>
                    <ErrorBoundary>
                        {articlesIsLoading ? (
                            <Spinner />
                        ) : (
                            articles
                                .slice(
                                    (+articlesID - 1) * articlesPerPage,
                                    +articlesID * articlesPerPage
                                )
                                .map((item: IArticle) => <Article {...item} />)
                        )}
                    </ErrorBoundary>
                </div>
            </section>
            <div className={css.pagination}>
                <Pagination pages={pages} currentPage={+router.query} />
            </div>
        </Layout>
    );
};

export default Articles;
