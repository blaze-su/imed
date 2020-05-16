import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticle, updateArtcile, editChunk } from "redux/article/actions";
import { IArticleState } from "redux/article/types";
import { IArticle, IChunk } from "types";

import { ArticleForm } from "components/article/ArticleForm";
import { Box } from "components/Box";
import {
    ArticleChunkTitle,
    ArticleChunkParagraph,
    ArticleChunkTitleRender,
    ArticleChunkParagraphRender,
} from "components/article/ArticleChunk";

import "antd/dist/antd.css";
import { Switch } from "antd";

const HOST_API = process.env.REACT_APP_HOST_API;

export const ArticleUpdate = () => {
    const { articleId } = useParams();
    const url = `${HOST_API}/articles/${articleId}`;

    const dispatch = useDispatch();

    useEffect((): any => dispatch(fetchArticle(url)), [url, dispatch]);

    const updateHandler = (article: IArticle) =>
        dispatch(updateArtcile(url, article));

    const articleReduser: IArticleState = useSelector(
        (store: any) => store.articleReduser
    );

    const { article, isLoading, isEdit } = articleReduser;

    const editHandler = (isEdit: boolean) => {
        dispatch(editChunk(!isEdit));
    };

    return (
        <Box>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <>
                    <ArticleForm
                        article={article as IArticle}
                        formHandler={(article) => updateHandler(article)}
                        buttonCaption="Сохранить"
                    />
                    <Switch defaultChecked onChange={editHandler} />
                    <RenderChunks article={article} isEdit={isEdit} />
                </>
            )}
        </Box>
    );
};

const RenderChunks = (props: any) => {
    const { article, isEdit } = props;

    if (article === null || isEdit === undefined) return null;

    return (
        <>
            {article.chunks?.map((chunk: IChunk) => {
                if (chunk.type === "TITLE")
                    return (
                        <div>
                            {isEdit ? (
                                <ArticleChunkTitle
                                    key={chunk._id}
                                    chunk={chunk}
                                    articleId={article._id}
                                />
                            ) : (
                                <ArticleChunkTitleRender {...chunk} />
                            )}
                        </div>
                    );

                if (chunk.type === "PARAGRAPH")
                    return (
                        <div>
                            {isEdit ? (
                                <ArticleChunkParagraph
                                    key={chunk._id}
                                    chunk={chunk}
                                    articleId={article._id}
                                />
                            ) : (
                                <ArticleChunkParagraphRender {...chunk} />
                            )}
                        </div>
                    );
            })}
        </>
    );
};
