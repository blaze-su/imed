// import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.scss";
import { fetchServices } from "@redux/actions";
import { ErrorBoundary, Spinner, Title, Box } from "@components/atoms";
import { useReset } from "@components/template/resetToggle";
import { Layout } from "@components/template";
import { IService } from "@interfaces";
import { ServiceAccordion } from "@components/organisms/Service";
import { HOST_API } from "@keys";

const Services = () => {
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
