import style from "./index.scss";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAbout } from "@redux/actions";
import { useReset } from "@components/template/resetToggle";

import { ErrorBoundary, Spinner, Title } from "@components/atoms";

// import {GalleryPhoto, GalleryVideo } from '@components/molecules';
// import {Vacancies} from '@components/organisms';

import { Layout } from "@components/template";

//import Tabs from '../../components/organisms/Tabs';

const About = () => {
  //const router = useRouter();
  //const {aboutID} = router.query;
  const url: string = `https://kasparov-store.ru/About.json`;
  const dispatch = useDispatch();
  useReset(dispatch);
  useEffect((): any => dispatch(fetchAbout(url)), [url, dispatch]);
  const fetchAboutPage = useSelector((store: any) => store.fetchAbout);
  const { title, text, photo } = fetchAboutPage.about;
  const isLoading = fetchAboutPage.aboutIsLoading;
  // let currentTarget = null;
  // aboutID === 'photo' ?  currentTarget = 0 :
  //     aboutID === 'video' ?  currentTarget = 1 :
  //         aboutID === 'vacancy' ?  currentTarget = 2 : currentTarget = 0;s
  return (
    <Layout
      title={title || "О центре"}
      description={"Информация о нашем центре"}
      keywords={"Kek"}
      breadcrumbs={[
        { title: "Главная", link: "/" },
        { title: "О центре", link: "/about" }
      ]}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <ErrorBoundary>
          <Title text={title} />
          <section>
            <div className={style.wrap}>
              <div className={style.text}>
                {text.map((item: string, index: number) => (
                  <p key={style.text + index}>{item}</p>
                ))}
              </div>
              <img
                className={style.img}
                src={photo.src}
                alt={title}
                title={title}
              />
            </div>
          </section>
          <section>
            {/* <Tabs currentTab={currentTarget} links={['Фото', 'Видео', 'Вакансии']} >
                        <GalleryPhoto url={'http://localhost:8000/uploads'}/>
                        <GalleryVideo url={'https://kasparov-store.ru/Video.json'} />
                        <Vacancies/>
                    </Tabs> */}
          </section>
        </ErrorBoundary>
      )}
    </Layout>
  );
};

export default About;