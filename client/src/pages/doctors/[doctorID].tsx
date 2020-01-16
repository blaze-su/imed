import style from "./doctor.scss";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { fetchDoctor, toggleFormSign } from "@redux/actions";
import { Title, Button, Spinner, ErrorBoundary } from "@components/atoms";
import { useReset } from "@components/template/resetToggle";
import { Layout } from "@components/template";

const Doctor = () => {
    const router = useRouter();
    const { doctorID } = router.query;

    const url: string = `http://localhost:3000/api/doctors/${doctorID}`;
    const dispatch = useDispatch();
    useReset(dispatch);
    useEffect((): any => dispatch(fetchDoctor(url)), [url, dispatch]);
    const doctorReducer = useSelector((store: any) => store.doctorReducer);
    const { doctor, doctorIsLoading } = doctorReducer;

    const arr = [
        { title: "Главная", link: "/" },
        { title: "Врачи", link: "/doctors" },
        { title: doctor.name, link: "" }
    ];

    console.log(doctor);
    return (
        <Layout
            title={"Это тайтл"}
            description={"Это дескрипшен"}
            keywords={"Это ключевое слово"}
            breadcrumbs={arr}
        >
            {doctorIsLoading ? (
                <Spinner />
            ) : (
                <ErrorBoundary>
                    <Title text={doctor.name} />
                    <section className={style.case}>
                        <aside className={style.photo}>
                            <img
                                className={style.img}
                                src={`http://localhost:3000/api/static/${doctor.filesId[0].src}`}
                                alt={doctor.name}
                            />
                            <Button
                                text={"Записаться на прием"}
                                onClick={() => dispatch(toggleFormSign(true))}
                            />
                        </aside>
                        <article className={style.content}>
                            <h3 className={style.title}>Образование</h3>
                            {doctor.education.map(
                                (item: string, index: number) => (
                                    <span className={style.description} key={index}>
                                        {item}
                                    </span>
                                )
                            )}
                            <p className={style.description}>
                                {doctor.describe}
                            </p>
                        </article>
                    </section>
                </ErrorBoundary>
            )}
        </Layout>
    );
};

export default Doctor;
