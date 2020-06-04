import { Layout } from "@components/template";
import React from "react";
import { Title } from "@components/atoms";
import style from "./index.module.scss";
import { useDispatch } from "react-redux";
import { useReset } from "@components/template/resetToggle";

const Search = (props: any) => {
    const dispatch = useDispatch();
    useReset(dispatch);
    return (
        <Layout
            isMobile={props.isMobile}
            title={"Intellect Medical Group"}
            description={"Это дескрипшен"}
            keywords={"Это ключевое слово"}
            breadcrumbs={[
                { title: "Главная", link: "/" },
                { title: "Поиск", link: "/" },
            ]}
        >
            <Title text={"Поиск"} />
            <section className={style.section}>
                <div className={style.wrap}>
                    <label className={style.inputWrap}>
                        <input type="text" className={style.input} />
                        <img
                            className={style.img}
                            src={
                                "https://www.pngfind.com/pngs/m/617-6173786_small-icon-png-search-icon-svg-transparent-png.png"
                            }
                            alt=""
                        />
                    </label>
                    {/* <Tab links={[{title:'Услуги', count: 10}, {title: 'Статьи', count: 20}, {title: 'Врачи', count: 30}]}>
                        <h1>kek</h1>
                        <h1>kek2</h1>
                        <h1>kek3</h1>
                    </Tab> */}
                </div>
            </section>
        </Layout>
    );
};

export default Search;
