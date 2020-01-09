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
  console.log('doctorID', router.query);

  const url: string = `http://localhost:3000/api/doctors/${doctorID}`;
  console.log('durl', url);

  const dispatch = useDispatch();
  useReset(dispatch);
  useEffect((): any => dispatch(fetchDoctor(url)), [url, dispatch]);
  const doctorReducer = useSelector((store: any) => store.doctorReducer);
  const { doctor, doctorIsLoading } = doctorReducer;
 
  const arr = [
    { title: "Главная", link: "/" },
    { title: "Врачи", link: "/doctors" },
    { title: doctor.name, link: "/doctors" }
  ];

  console.log(doctorID);
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
          <div className={style.wrap}>
            <div className={style.textWrap}>
              <span className={style.title}>{doctor.position}</span>
              {/* {achievement.map((item: string, index: number) => (
                <span className={style.desc} key={index}>
                  {item}
                </span>
              ))} */}
              <span className={style.title}>Образование</span>
              {doctor.education.map((item: string, index: number) => (
                <span className={style.desc} key={index}>
                  {item}
                </span>
              ))}
              <span className={style.desc}>{doctor.describe}</span>
            </div>
            <div className={style.photoWrap}>
              <img className={style.img} src={`http://localhost:3000/api/static/${doctor.filesId[0].src}`} alt={doctor.name} />
              <Button
                text={"Записаться на прием"}
                onClick={() => dispatch(toggleFormSign(true))}
              />
            </div>
          </div>
        </ErrorBoundary>
      )}
    </Layout>
  );
};

export default Doctor;
