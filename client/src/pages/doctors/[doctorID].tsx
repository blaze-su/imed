import { Box, Button, ErrorBoundary, Spinner, Title } from "@components/atoms";
import { HOST_API, HOST_IMAGE_RESIZE } from "@keys";
import React, { useEffect } from "react";
import { fetchDoctor, toggleFormDefault } from "@redux/actions";
import { useDispatch, useSelector } from "react-redux";

import { Layout } from "@components/template";
import style from "./doctor.module.scss";
import { useReset } from "@components/template/resetToggle";
import { useRouter } from "next/router";

const Doctor = (props: any) => {
    const router = useRouter();
    const { doctorID } = router.query;

    const url: string = `${HOST_API}/doctors/${doctorID}`;
    const dispatch = useDispatch();
    useReset(dispatch);
    useEffect((): any => dispatch(fetchDoctor(url)), [url, dispatch]);
    const doctorReducer = useSelector((store: any) => store.doctorReducer);
    const { doctor, doctorIsLoading } = doctorReducer;

    const arr = [
        { title: "Главная", link: "/" },
        { title: "Врачи", link: "/doctors" },
        { title: doctor.name, link: "" },
    ];

    console.log(doctor);
    return (
        <Layout
            isMobile={props.isMobile}
            title={doctor.name}
            description={"Это дескрипшен"}
            keywords={"Это ключевое слово"}
            breadcrumbs={arr}
        >
            <Box>
                {doctorIsLoading ? (
                    <Spinner />
                ) : (
                    <ErrorBoundary>
                        <Title text={doctor.name} />
                        <section className={style.case}>
                            <aside className={style.photo}>
                                <img
                                    className={style.img}
                                    src={`${HOST_IMAGE_RESIZE}/480x395/${doctor.filesId[0].src}`}
                                    alt={doctor.name}
                                />
                                <Button
                                    text={"Записаться на прием"}
                                    onClick={() =>
                                        dispatch(toggleFormDefault(true))
                                    }
                                />
                            </aside>
                            <article className={style.content}>
                                {doctor.description.map(
                                    (item: string, index: number) => (
                                        <p
                                            className={style.description}
                                            key={index}
                                        >
                                            {item}
                                        </p>
                                    )
                                )}
                                <h3 className={style.title}>Образование</h3>
                                {doctor.education.map(
                                    (item: string, index: number) => (
                                        <span
                                            className={style.description}
                                            key={index}
                                        >
                                            {item}
                                        </span>
                                    )
                                )}
                               
                            </article>
                        </section>
                    </ErrorBoundary>
                )}
            </Box>
        </Layout>
    );
};

export default Doctor;
