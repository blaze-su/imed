import { Box, Spinner, Title } from "@components/atoms";
import { ISale, Sale } from "@components/organisms";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { HOST_API } from "@keys";
import { Layout } from "@components/template";
import { fetchSales } from "@redux/actions";
import style from "./index.module.scss";
import { useReset } from "@components/template/resetToggle";

const SaleList = (props:any) => {
    const url: string = `${HOST_API}/promos`;
    const dispatch = useDispatch();
    useReset(dispatch);
    useEffect((): any => dispatch(fetchSales(url)), [url, dispatch]);
    const salesReducer = useSelector((store: any) => store.salesReducer);
    const { sales, salesIsLoading } = salesReducer;
    return (
        <Layout
            isMobile={props.isMobile}
            title={"Intellect Medical Group"}
            description={"Это дескрипшен"}
            keywords={"Это ключевое слово"}
            breadcrumbs={[
                { title: "Главная", link: "/" },
                { title: "Акции", link: "/sales" }
            ]}
        >
            <Box>
                <Title text={"Акции"} />
                {salesIsLoading ? (
                    <Spinner />
                ) : (
                    <section className={style.actions}>
                        {sales.map((item: ISale) => (
                            <div className={style.actions__item} key={item._id} >
                                <Sale {...item} />
                            </div>
                        ))}
                    </section>
                )}
            </Box>
        </Layout>
    );
};

export default SaleList;
