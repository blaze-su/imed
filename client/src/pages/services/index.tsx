// import Link from "next/link";

import "./index.module.scss";

import { Box, ErrorBoundary, Spinner, Title } from "@components/atoms";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { HOST_API } from "@keys";
import { IService } from "@interfaces";
import { Layout } from "@components/template";
import { ServiceAccordion } from "@components/organisms/Service";
import { fetchServices } from "@redux/actions";
import { useReset } from "@components/template/resetToggle";

const Services = (props:any) => {
    const url: string = `${HOST_API}/services`;
    const dispatch = useDispatch();
    useReset(dispatch);
    useEffect((): any => dispatch(fetchServices(url)), [url, dispatch]);
    const servicesReducer = useSelector((store: any) => store.servicesReducer);
    const { services, servicesIsLoading } = servicesReducer;

    const links = [
        { title: "Главная", link: "/" },
        { title: "Услуги", link: "services/" }
    ];

    return (
        <Layout
            isMobile={props.isMobile}
            title={"Это тайлтл"}
            description={"Это дескрипшен"}
            keywords={"Это ключевое слово"}
            breadcrumbs={links}
        >
            <Box>
                {servicesIsLoading ? (
                    <Spinner />
                ) : (
                    <ErrorBoundary>
                        <Title text={"Услуги"} />
                        <div>
                            {services.map((s: IService) => (
                                <ServiceAccordion
                                    title={s.title}
                                    items={s.links}
                                    key={s._id}
                                />
                            ))}
                        </div>
                    </ErrorBoundary>
                )}
            </Box>
        </Layout>
    );
};

export default Services;
