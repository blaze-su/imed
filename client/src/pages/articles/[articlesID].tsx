import { Article, IArticle } from "@components/organisms";
import { ErrorBoundary, Spinner, Title } from "@components/atoms";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { HOST_API } from "@keys";
import { Layout } from "@components/template";
import MenuSide from "@components/organisms/Catalog/MenuSide";
import { Pagination } from "@components/molecules";
import { ParsedUrlQuery } from "querystring";
import css from "./index.scss";
import { fetchArticles } from "@redux/actions";
import { useReset } from "@components/template/resetToggle";
import { useRouter } from "next/router";

const breadcrumbs = [
    { title: "Главная", link: "/" },
    { title: "Статьи", link: "/aricles" },
];

const Articles = (props: any) => {
    const router = useRouter();
    const { articlesID }: ParsedUrlQuery = router.query;
    const articlesPerPage: number = 5;

    const url: string = `${HOST_API}/articles`;
    const dispatch = useDispatch();
    useReset(dispatch);
    useEffect((): any => dispatch(fetchArticles(url)), [url, dispatch]);
    const articlesReducer = useSelector((store: any) => store.articlesReducer);

    if (articlesReducer === undefined) return null;

    const { articles, articlesIsLoading } = articlesReducer;

    let pages;

    if (articles) {
        pages = articles
            .slice(0, Math.ceil(articles.length / articlesPerPage))
            .map((_item: any, index: number) => `/articles/${index + 1}`);
    }

    return (
        <Layout
            isMobile={props.isMobile}
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
                                    (parseInt(articlesID as string) - 1) *
                                        articlesPerPage,
                                    parseInt(articlesID as string) *
                                        articlesPerPage
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
