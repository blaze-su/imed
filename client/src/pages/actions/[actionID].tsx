import { Box, ErrorBoundary, Spinner, Title } from "@components/atoms";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { HOST_API } from "@keys";
import { Layout } from "@components/template";
import { SalesSlider } from "@components/organisms";
import css from "./action.scss";
import { fetchSale } from "@redux/actions";
import { useReset } from "@components/template/resetToggle";
import { useRouter } from "next/router";

const Sale = (props:any) => {
    const router = useRouter();
    const { actionID } = router.query;
    const url: string = `${HOST_API}/promos/${actionID}`;
    const dispatch = useDispatch();
    useReset(dispatch);
    useEffect((): any => dispatch(fetchSale(url)), [url, dispatch]);
    const saleReducer = useSelector((store: any) => store.saleReducer);
	const { sale, saleIsLoading } = saleReducer;
	
	const arr = [
        { title: "Главная", link: "/" },
        { title: "Акции", link: "/actions" },
        { title: sale.title, link: "" }
    ];

    return (
        <Layout
            isMobile={props.isMobile}
            title={"Это тайтл"}
            description={"Это дескрипшен"}
            keywords={"Это ключевое слово"}
            breadcrumbs={arr}
        >
            <Box>
                {saleIsLoading ? (
                    <Spinner />
                ) : (
                    <ErrorBoundary>
                        <Title text={sale.title} />
                        <section>Здесь текст акции!!!</section>
                        <section>
                            <h2 className={css.title}>
                                Рекомендуем посмотреть
                            </h2>
                            <SalesSlider />
                        </section>
                    </ErrorBoundary>
                )}
            </Box>
        </Layout>
    );
};

export default Sale;
