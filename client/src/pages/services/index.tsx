// import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.scss";
import { fetchServices } from "@redux/actions";
import { ErrorBoundary, Spinner, Title } from "@components/atoms";
import { useReset } from "@components/template/resetToggle";
import { Layout } from "@components/template";
import { ILink } from "@interfaces";
import { ServiceAccordion } from "@components/organisms/Service/ServiceAccordion";

interface IService {
    _id: string;
    title: string;
    sort: number;
    links: ILink[];
}

const Services = () => {
    const url: string = "http://localhost:3000/api/services";
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
          
        </Layout>
    );
};

export default Services;
