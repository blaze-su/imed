import React, { useEffect } from "react";
import "antd/dist/antd.css";
import "./App.css";
import { Layout, Menu, Breadcrumb } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticle } from "redux/article/actions";
import { IArticleState } from "redux/article/types";

import { ArticleChunk } from "components/article/ArticleChunk"

const { Header, Content, Footer } = Layout;

function App() {
    return (
        <Layout>
            <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={["2"]}
                >
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2!</Menu.Item>
                    <Menu.Item key="3">nav 3!</Menu.Item>
                </Menu>
            </Header>
            <Content
                className="site-layout"
                style={{ padding: "0 50px", marginTop: 64 }}
            >
                <Breadcrumb style={{ margin: "16px 0" }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div
                    className="site-layout-background"
                    style={{ padding: 24, minHeight: 380 }}
                >
        
                    <ArticleChunk />
                    <ContentElement />
                </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
                Ant Design ©2018 Created by Ant UED
            </Footer>
        </Layout>
    );
}

const ContentElement = () => {
    const url = "http://localhost:3000/api/articles/5dc2c40c5b16850f689aa29b";
    const dispatch = useDispatch();
    useEffect((): any => dispatch(fetchArticle(url)), [url, dispatch]);

    const articleReduser: IArticleState = useSelector(
        (store: any) => store.articleReduser
    );

    const { article, isLoading } = articleReduser;

    return (
        <>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <div>{article ? article.title + "!" : "ERR"}</div>
            )}
        </>
    );
};

export default App;
