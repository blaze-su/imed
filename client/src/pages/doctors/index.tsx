import style from "./index.scss";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDoctors } from "@redux/actions";
import { Spinner, Title, Box } from "@components/atoms";
import { Doctor, IDoctor } from "@components/organisms";
import { Layout } from "@components/template";
import { useReset } from "@components/template/resetToggle";
import { HOST_API } from "@keys";

const Doctors = () => {
    const url: string = `${HOST_API}/doctors`;
    const dispatch = useDispatch();
    useReset(dispatch);
    useEffect((): any => dispatch(fetchDoctors(url)), [url, dispatch]);
    const doctorsReducer = useSelector((store: any) => store.doctorsReducer);
    const { doctors, doctorsIsLoading } = doctorsReducer;

    return (
        <Layout
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
                            <div className={style.item}>
                                <Doctor {...doctor} key={doctor._id} />
                            </div>
                        ))
                    )}
                </section>
            </Box>
        </Layout>
    );
};

export default Doctors;
