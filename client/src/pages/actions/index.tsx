import style from "./index.scss";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSales } from "@redux/actions";
import { Spinner, Title, Box } from "@components/atoms";
import { Sale, ISale } from "@components/organisms";
import { useReset } from "@components/template/resetToggle";
import { Layout } from "@components/template";
import { HOST_API } from "@keys";

const SaleList = () => {
    const url: string = `${HOST_API}/promos`;
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
            <Box>
                <Title text={"Акции"} />
                {salesIsLoading ? (
                    <Spinner />
                ) : (
                    <section className={style.items}>
                        {sales.map((item: ISale) => (
                            <div className={style.item}>
                                <Sale {...item} key={item._id} />
                            </div>
                        ))}
                    </section>
                )}
            </Box>
        </Layout>
    );
};

export default SaleList;
