import React from "react";
import { useDispatch } from "react-redux";
import {
    ArrowUpOutlined,
    ArrowDownOutlined,
    DeleteOutlined,
    SaveOutlined,
    FontSizeOutlined,
    PictureOutlined,
} from "@ant-design/icons";

import {
    deleteChunk,
    updateChunk,
    moveChunk,
    addChunk,
} from "redux/article/actions";
import style from "./index.module.scss";

import { Form, Input, Select, Col, Row } from "antd";
import { IChunkMove, IChunk } from "types";
const { Option } = Select;
const HOST_API = process.env.REACT_APP_HOST_API;

export const ArticleChunkTitle = (props: any) => {
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

    const moveChunkHandler = (move: IChunkMove) => {
        const url = `${HOST_API}/articles/${articleId}/chunks/move`;

        dispatch(moveChunk(url, move));
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
                <DeleteOutlined
                    onClick={deteteChunkHandler}
                    className={style.controls__btn}
                />
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
                onFinish={finishHandler}
                form={form}
                name={`chunkForm[${chunkId}]`}
                initialValues={{
                    ...chunk.title,
                }}
            >
                <Row gutter={[10, 0]}>
                    <Col flex="auto">
                        <Form.Item name="title" style={{ margin: "0" }}>
                            <Input placeholder="Введите заголовок" />
                        </Form.Item>
                    </Col>
                    <Col flex="200px">
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

export const ArticleChunkTitleRender = (props: any) => {
    const title = props.title;

    switch (title.style) {
        case "H2":
            return <h2>{title.title}</h2>;
            
        case "H3":
            return <h3>{title.title}</h3>;
            
        case "H4":
            return <h4>{title.title}</h4>;
    }

    return null;
};
