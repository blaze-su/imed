import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles } from "redux/articles/actions";
import { IArticlesState, IArticles } from "redux/articles/types";
import { ArticleList} from "components/article/ArticleList"
import { Link } from "react-router-dom";
import { Button } from "antd";
import 'antd/dist/antd.css';
const HOST_API = process.env.REACT_APP_HOST_API;

export const Articles = () => {
    const url = `${HOST_API}/articles`;
    const dispatch = useDispatch();

    useEffect((): any => dispatch(fetchArticles(url)), [url, dispatch]);

    const articlesReduser: IArticlesState = useSelector(
        (store: any) => store.articlesReduser
    );

    const { articles, isLoading } = articlesReduser;

    return (
        <>
            <Link to="/articles/add" style={{"marginBottom": "20px", "display":"inline-block"}}>
                <Button type="primary">Добавить статью</Button>
            </Link>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                articles.map((article: IArticles) => (
                    <ArticleList key={article._id} {...article} />
                ))
            )}
        </>
    );
};
