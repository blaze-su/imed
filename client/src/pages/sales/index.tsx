import style from "./index.scss";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSales } from "@redux/actions";
import { Spinner, Title } from "@components/atoms";
import { Sale, ISale } from "@components/organisms";
import { useReset } from "@components/template/resetToggle";
import { Layout } from "@components/template";

const SaleList = () => {
    const url: string = "http://localhost:3000/api/promos";
    const dispatch = useDispatch();
    useReset(dispatch);
    useEffect((): any => dispatch(fetchSales(url)), [url, dispatch]);
    const salesReducer = useSelector((store: any) => store.salesReducer);
    const { sales, salesIsLoading } = salesReducer;
    return (
        <Layout
            title={"Это тайлтл"}
            description={"Это дескрипшен"}
            keywords={"Это ключевое слово"}
            breadcrumbs={[
                { title: "Главная", link: "/" },
                { title: "Акции", link: "/sales" }
            ]}
        >
            <Title text={"Акции"} />
            {salesIsLoading ? (
                <Spinner />
            ) : (
                <section className={style.section}>
                    <div className={style.item}>
                        {sales.map((item: ISale) => (
                            <Sale {...item} key={item._id} />
                        ))}
                    </div>
                </section>
            )}
        </Layout>
    );
};

export default SaleList;
