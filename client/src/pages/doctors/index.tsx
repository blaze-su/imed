import { Box, Spinner, Title } from "@components/atoms";
import { Doctor, IDoctor } from "@components/organisms";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { HOST_API } from "@keys";
import { Layout } from "@components/template";
import { fetchDoctors } from "@redux/actions";
import style from "./index.scss";
import { useReset } from "@components/template/resetToggle";

const Doctors = (props: any) => {
    const url: string = `${HOST_API}/doctors`;
    const dispatch = useDispatch();
    useReset(dispatch);
    useEffect((): any => dispatch(fetchDoctors(url)), [url, dispatch]);
    const doctorsReducer = useSelector((store: any) => store.doctorsReducer);
    const { doctors, doctorsIsLoading } = doctorsReducer;

    return (
        <Layout
            isMobile={props.isMobile}
            title={"Это тайлтл"}
            description={"Это дескрипшен"}
            keywords={"Это ключевое слово"}
            breadcrumbs={null}
        >
            <Box>
                <Title text={"Доктора"} />
                <section className={style.doctors}>
                    {doctorsIsLoading ? (
                        <Spinner />
                    ) : (
                        doctors.map((doctor: IDoctor) => (
                            <div className={style.item} key={doctor._id}>
                                <Doctor {...doctor} />
                            </div>
                        ))
                    )}
                </section>
            </Box>
        </Layout>
    );
};

export default Doctors;
