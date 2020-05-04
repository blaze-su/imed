import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchArticle,
    deleteChunk,
    updateArtcile,
    updateChunk,
} from "redux/article/actions";
import { IArticleState } from "redux/article/types";
import { IArticle, IChunk } from "types";

import { ArticleForm } from "components/article/ArticleForm";
import "antd/dist/antd.css";
import style from "./index.module.scss";
import {
    ArrowUpOutlined,
    ArrowDownOutlined,
    DeleteOutlined,
    SaveOutlined,
} from "@ant-design/icons";
import { Form, Input, Select, Col, Row, Radio, Upload } from "antd";
const { Option } = Select;

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

    const { article, isLoading } = articleReduser;
    console.log("article", article);

    return (
        <div>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <>
                    <ArticleForm
                        article={article as IArticle}
                        formHandler={(article) => updateHandler(article)}
                        buttonCaption="Сохранить"
                    />
                    <RenderChunks article={article} />
                </>
            )}
        </div>
    );
};

const RenderChunks = (props: any) => {
    const { article } = props;

    if (article === null) return null;

    //console.log("chunks", article);
    //console.log("chunks.title", Object.keys(article).length);

    return (
        <>
            {article.chunks?.map((chunk: IChunk) => {
                if (chunk.type === "TITLE")
                    return (
                        <ArticleChunkTitle
                            key={chunk._id}
                            chunk={chunk}
                            articleId={article._id}
                        />
                    );

                if (chunk.type === "PARAGRAPH")
                    return (
                        <ArticleChunkParagraph
                            key={chunk._id}
                            chunk={chunk}
                            articleId={article._id}
                        />
                    );
            })}
        </>
    );
};

const ArticleChunkTitle = (props: any) => {
    const dispatch = useDispatch();

    const [form] = Form.useForm();

    const { chunk, articleId } = props;
    const chunkId = chunk._id;

    const deteteChunkHandler = () => {
        const url = `${HOST_API}/articles/${articleId}/chunks/${chunkId}`;
        dispatch(deleteChunk(url));
    };

    const finishHandler = () => {
        const url = `${HOST_API}/articles/${articleId}/chunks/${chunkId}`;

        dispatch(
            updateChunk(
                url,
                Object.assign(chunk, { title: form.getFieldsValue() })
            )
        );
    };

    const submitHandler = () => {
        form.submit();
    };

    return (
        <div className={style.box}>
            <div className={style.controls}>
                <ArrowUpOutlined className={style.controls__btn} />
                <ArrowDownOutlined className={style.controls__btn} />
                <SaveOutlined
                    onClick={submitHandler}
                    className={style.controls__btn}
                />
                <DeleteOutlined
                    onClick={deteteChunkHandler}
                    className={style.controls__btn}
                />
            </div>
            <Form
                onFinish={finishHandler}
                form={form}
                name={`chunkForm[${chunkId}]`}
                initialValues={{
                    ...chunk.title,
                }}
            >
                <Row gutter={[10, 0]}>
                    <Col flex={4}>
                        <Form.Item name="title" style={{ margin: "0" }}>
                            <Input placeholder="Введите заголовок" />
                        </Form.Item>
                    </Col>
                    <Col flex={1}>
                        <Form.Item name="style" style={{ margin: "0" }}>
                            <Select placeholder="Введите размер заголовка">
                                <Option value="H1">H1</Option>
                                <Option value="H2">H2</Option>
                                <Option value="H3">H3</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

const ArticleChunkParagraph = (props: any) => {
    const { chunk, articleId } = props;
    const chunkId = chunk._id;

    const dispatch = useDispatch();
    const [state, setState] = useState({
        file: chunk.image.fileId,
        imageIsLoading: false,
    });

    const [form] = Form.useForm();
    const submitHandler = () => {
        form.submit();
    };

    const finishHandler = () => {
        const url = `${HOST_API}/articles/${articleId}/chunks/${chunkId}`;

        const fields = form.getFieldsValue();

        dispatch(
            updateChunk(
                url,
                Object.assign(chunk, {
                    text: fields.text,
                    image: {
                        fileId: state.file._id,
                        style: fields.imageStyle,
                    },
                })
            )
        );
    };

    const imageUploadHendler = (info: any) => {
        if (info.file.status === "uploading") {
            setState({ ...state, imageIsLoading: true });
            return;
        }

        if (info.file.status === "done") {
            setState({
                ...state,
                imageIsLoading: false,
                file: info.file.response,
            });
            console.log("ArticleChunkParagraph.info", info.file.response);
            return;
        }
    };

    return (
        <div className={style.box}>
            <div className={style.controls}>
                <ArrowUpOutlined className={style.controls__btn} />
                <ArrowDownOutlined className={style.controls__btn} />
                <SaveOutlined
                    onClick={submitHandler}
                    className={style.controls__btn}
                />
                <DeleteOutlined className={style.controls__btn} />
            </div>
            <Form
                form={form}
                onFinish={finishHandler}
                name={`chunkForm[${chunkId}]`}
                initialValues={{
                    text: chunk.text,
                    imageStyle: chunk.image.style || "M",
                }}
            >
                <Row gutter={[10, 0]}>
                    <Col flex={4}>
                        <Form.Item name="text" style={{ margin: "0" }}>
                            <Input.TextArea
                                style={{ minHeight: "200px" }}
                                placeholder="Введите заголовок"
                                autoSize={true}
                            />
                        </Form.Item>
                    </Col>
                    <Col flex={1}>
                        <Upload
                            name="file"
                            showUploadList={false}
                            action={`${HOST_API}/files/`}
                            data={{
                                parentId: articleId,
                                title: "ArticleChunkParagraph.Test",
                            }}
                            onChange={imageUploadHendler}
                        >
                            <div className={style.upload}>
                                {state.imageIsLoading ? (
                                    <div>Loading...</div>
                                ) : (
                                    <ImagePlaceholder image={state.file} />
                                )}
                            </div>
                        </Upload>
                        <Form.Item name="imageStyle" style={{ margin: "0" }}>
                            <Radio.Group
                                className={style.imageStyle}
                                defaultValue="M"
                                size="small"
                            >
                                <Radio.Button value="S">S</Radio.Button>
                                <Radio.Button value="M">M</Radio.Button>
                                <Radio.Button value="L">L</Radio.Button>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

const ImagePlaceholder = (props: any) => {
    const { image } = props;

    console.log("ImagePlaceholder", props);

    if (!image) return <div>image not found</div>;

    const url = `${HOST_API}/static/${image.src}`;

    return (
        <div>
            <img className={style.image} src={url} />
        </div>
    );
};
