import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { updateChunk, addChunk, moveChunk } from "redux/article/actions";
import style from "./index.module.scss";
import {
    ArrowUpOutlined,
    ArrowDownOutlined,
    DeleteOutlined,
    SaveOutlined,
    FontSizeOutlined,
    PictureOutlined,
} from "@ant-design/icons";
import { Form, Input, Col, Row, Radio, Upload } from "antd";
import { IChunk, IChunkMove } from "types";

const HOST_API = process.env.REACT_APP_HOST_API;

export const ArticleChunkParagraph = (props: any) => {
    const { chunk, articleId } = props;
    const chunkId = chunk._id;
    //const stateFile = chunk?.image.fileId

    const dispatch = useDispatch();
    const [state, setState] = useState({
        file: chunk.image?.fileId,
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

    const moveChunkHandler = (move: IChunkMove) => {
        const url = `${HOST_API}/articles/${articleId}/chunks/move`;

        dispatch(moveChunk(url, move));
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

    const addChunkHandler = (chunk: IChunk) => {
        const url = `${HOST_API}/articles/${articleId}/chunks/`;
        dispatch(addChunk(url, chunk));
    };

    return (
        <div className={style.box}>
            <div className={style.controls}>
                <ArrowUpOutlined
                    onClick={() =>
                        moveChunkHandler({
                            direction: "UP",
                            chunkId: chunkId,
                        })
                    }
                    className={style.controls__btn}
                />
                <ArrowDownOutlined
                    onClick={() =>
                        moveChunkHandler({
                            direction: "DOWN",
                            chunkId: chunkId,
                        })
                    }
                    className={style.controls__btn}
                />
                <SaveOutlined
                    onClick={submitHandler}
                    className={style.controls__btn}
                />
                <DeleteOutlined className={style.controls__btn} />
                <FontSizeOutlined
                    onClick={() =>
                        addChunkHandler({
                            type: "TITLE",
                            sort: chunk.sort + 1,
                            title: { title: "{TITLE}", style: "H2" },
                        })
                    }
                    className={style.controls__btn}
                />
                <PictureOutlined
                    onClick={() =>
                        addChunkHandler({
                            type: "PARAGRAPH",
                            sort: chunk.sort + 1,
                            text: "{TEXT}",
                        })
                    }
                    className={style.controls__btn}
                />
            </div>
            <Form
                form={form}
                onFinish={finishHandler}
                name={`chunkForm[${chunkId}]`}
                initialValues={{
                    text: chunk.text,
                    imageStyle: chunk.image?.style || "M",
                }}
            >
                <Row gutter={[10, 0]}>
                    <Col flex="auto">
                        <Form.Item name="text" style={{ margin: "0" }}>
                            <Input.TextArea
                                style={{ minHeight: "200px" }}
                                placeholder="Введите заголовок"
                                autoSize={true}
                            />
                        </Form.Item>
                    </Col>
                    <Col flex="200px">
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
            <img className={style.image} src={url} alt="test" />
        </div>
    );
};

export const ArticleChunkParagraphRender = (props: any) => {
    const { text, image } = props;

    console.log("ArticleChunkParagraphRender", props);

    const url = `${HOST_API}/static/${image.fileId.src}`;

    let imageStyle = style.chunk__image__M;
    switch (image.style) {
        case "S":
            imageStyle = style.chunk__image__S;
            break;
        case "M":
            imageStyle = style.chunk__image__M;
            break;
        case "L":
            imageStyle = style.chunk__image__L;
            break;
    }

    return (
        <div className={style.chunk}>
            {image ? <img src={url} className={imageStyle} alt="test" /> : null}
            {text}
        </div>
    );
};
