import React from "react";
import { Tabs } from "@components/atoms";
import { Layout } from "@components/template";
import style from "./service.scss";

const links = [
    { title: "Главная", link: "/" },
    { title: "Услуги", link: "services/" }
];

const service = () => {
    return (
        <Layout
            title={"Это тайлтл"}
            description={"Это дескрипшен"}
            keywords={"Это ключевое слово"}
            breadcrumbs={links}
        >
            <div className={style.case}>
                <aside className={style.aside}></aside>
                <article className={style.article}>
                    <Tabs
                        titles={[
                            "Информация",
                            "Услуги и цены",
                            "Врачи",
                            "Оборудование"
                        ]}
                    >
                        <h1>1</h1>
                        <h1>2</h1>
                        <h1>3</h1>
                        <h1>4</h1>
                    </Tabs>
                </article>
            </div>
        </Layout>
    );
};

export default service;
