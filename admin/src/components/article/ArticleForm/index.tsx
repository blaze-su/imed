import React from "react";
import "antd/dist/antd.css";
import { Form, Input, Button } from "antd";
import { IArticle } from "types";

export interface IArticleForm {
    article?: IArticle
    formHandler: (article: IArticle) => void
    buttonCaption: "Сохранить" | "Добавить статью"
}

export const ArticleForm = (props: IArticleForm) => {
    const { article, formHandler, buttonCaption } = props;

    //console.log("ArticlesForm", article);

    const onFinish = (values: any) => {
        console.log("Success:", values);

        formHandler(values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <>
            <Form
                layout="vertical"
                name="basic"
                initialValues={{
                    ...article,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Заголовок"
                    name="title"
                    rules={[
                        {
                            required: true,
                            message: "Please input your username!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Описание"
                    name="preview"
                    rules={[
                        {
                            required: true,
                            message: "Please input your password!",
                        },
                    ]}
                >
                    <Input.TextArea />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        {buttonCaption}
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};
