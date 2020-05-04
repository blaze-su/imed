import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IArticleState } from "redux/article/types";
import { addArtcile, initArticle } from "redux/article/actions";
import { ArticleForm } from "components/article/ArticleForm";
import { Redirect } from "react-router-dom";
import { IArticle } from "types";

const HOST_API = process.env.REACT_APP_HOST_API;

export const ArticleAdd = () => {
    const dispatch = useDispatch();
    const url = `${HOST_API}/articles`;
    dispatch(initArticle())

    const addHandler = (article: IArticle) => {
        dispatch(addArtcile(url, article));
    };

    const articleReduser: IArticleState = useSelector(
        (store: any) => store.articleReduser
    );

    const { article } = articleReduser;

    return (
        <div>
            {article ? (
                <Redirect to={`/articles/${article._id}`} />
            ) : (
                <ArticleForm
                    buttonCaption="Добавить статью"
                    formHandler={(article) => addHandler(article)}
                />
            )}
        </div>
    );
};
