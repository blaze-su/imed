import css from "./index.scss";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDoctors } from "@redux/actions";
import { Spinner, Title } from "@components/atoms";
import { Doctor, IDoctor } from "@components/organisms";
import { Layout } from "@components/template";
import { useReset } from "@components/template/resetToggle";

const Doctors = () => {
  const url: string = "http://localhost:3000/api/doctors";
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
      <Title text={"Доктора"} />
      <section className={css.wrap}>
        {doctorsIsLoading ? (
          <Spinner />
        ) : (
          doctors.map((item: IDoctor) => <Doctor {...item} key={item._id} />)
        )}
      </section>
    </Layout>
  );
};

export default Doctors;
