import { Box, ErrorBoundary, Spinner, Tabs, Title } from "@components/atoms";
import {
    DoctorsList,
    ServiceMenu as Menu,
    ServicePriceAccordion,
} from "@components/organisms";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { HOST_API } from "@keys";
import { Layout } from "@components/template";
import { fetchService } from "@redux/actions";
import style from "./service.module.scss";
import { useReset } from "@components/template/resetToggle";
import { useRouter } from "next/router";

const service = (props: any) => {
    const router = useRouter();
    const serviceId = router.query.serviceId as string;

    //console.log("serviceId", serviceId);

    const url: string = `${HOST_API}/services/${serviceId}`;
    const dispatch = useDispatch();
    useReset(dispatch);
    useEffect((): any => {
        serviceId ? dispatch(fetchService(url)) : null;
    }, [url, dispatch]);
    const serviceReducer = useSelector((store: any) => store.serviceReducer);
    const { service, serviceIsLoading } = serviceReducer;

    // console.log("serviceIsLoading", serviceIsLoading);
    // console.log("service", service);

    const { doctorsId, title, parentId, description } = service;

    // console.log(doctorsId);

    const links = [
        { title: "Главная", link: "/" },
        { title: "Услуги", link: "/services/" },
        { title: title, link: "" },
    ];

    return (
        <Layout
            isMobile={props.isMobile}
            title={"Intellect Medical Group"}
            description={"Это дескрипшен"}
            keywords={"Это ключевое слово"}
            breadcrumbs={links}
        >
            <Box>
                {serviceIsLoading ? (
                    <Spinner />
                ) : (
                    <ErrorBoundary>
                        <Title text={title} />
                        <div className={style.case}>
                            <aside className={style.aside}>
                                <Menu
                                    isMobile={props.isMobile}
                                    serviceId={serviceId}
                                    parentId={parentId}
                                />
                            </aside>
                            <article className={style.article}>
                                <Tabs
                                    currentTab={1}
                                    titles={[
                                        "Информация",
                                        "Услуги и цены",
                                        "Врачи",
                                    ]}
                                >
                                    {description}
                                    <ServicePriceAccordion />
                                    <DoctorsList doctors={doctorsId} />
                                </Tabs>
                            </article>
                        </div>
                    </ErrorBoundary>
                )}
            </Box>
        </Layout>
    );
};

export default service;
