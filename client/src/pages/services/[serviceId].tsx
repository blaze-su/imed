import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Tabs, Title, Spinner, ErrorBoundary } from "@components/atoms";
import { ServiceMenu as Menu, DoctorsList } from "@components/organisms";
import { Layout } from "@components/template";
import style from "./service.scss";
import { useDispatch, useSelector } from "react-redux";
import { useReset } from "@components/template/resetToggle";
import { fetchService } from "@redux/actions";

const service = () => {
    const router = useRouter();
    const serviceId: string = Array.isArray(router.query.serviceId)
        ? router.query.serviceId[0]
        : router.query.serviceId;

    // serviceId =  serviceId == "string" ? serviceId : serviceId[0];

    console.log("serviceId", serviceId);

    const url: string = `http://localhost:3000/api/services/${serviceId}`;
    const dispatch = useDispatch();
    useReset(dispatch);
    useEffect((): any => dispatch(fetchService(url)), [url, dispatch]);
    const serviceReducer = useSelector((store: any) => store.serviceReducer);
    const { service, serviceIsLoading } = serviceReducer;

    console.log("serviceIsLoading", serviceIsLoading);
    console.log("service", service);

    const { doctorsId, equipmentsId, title, parentId, description } = service;

    console.log(doctorsId);

    const links = [
        { title: "Главная", link: "/" },
        { title: "Услуги", link: "/services/" },
        { title: title, link: "" }
    ];

    return (
        <Layout
            title={"Это тайлтл"}
            description={"Это дескрипшен"}
            keywords={"Это ключевое слово"}
            breadcrumbs={links}
        >
            {serviceIsLoading ? (
                <Spinner />
            ) : (
                <ErrorBoundary>
                    <Title text={title} />
                    <div className={style.case}>
                        <aside className={style.aside}>
                            <Menu serviceId={serviceId} parentId={parentId} />
                        </aside>
                        <article className={style.article}>
                            <Tabs
                                currentTab={2}
                                titles={[
                                    "Информация",
                                    "Услуги и цены",
                                    "Врачи",
                                    "Оборудование"
                                ]}
                            >
                                {description}
                                <h1></h1>
                                <DoctorsList doctors={doctorsId}/>
                                <h1>{equipmentsId.lenght}</h1>
                            </Tabs>
                        </article>
                    </div>
                </ErrorBoundary>
            )}
        </Layout>
    );
};


export default service;
