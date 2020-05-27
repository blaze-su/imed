import "../page.scss";

import { Box, Title } from "@components/atoms";
import React, { useState } from "react";

import FsLightbox from "fslightbox-react";
import { Layout } from "@components/template";
import style from "./About.module.scss"

const About = (props: any) => {
    const title = "О центре";
    return (
        <Layout
            isMobile={props.isMobile}
            title={title || "О центре"}
            description={"Информация о нашем центре"}
            keywords={"Kek"}
            breadcrumbs={[
                { title: "Главная", link: "/" },
                { title: "О центре", link: "/about" },
            ]}
        >
            <Box>
                <Title text={title} />
                <article>
                    <p>
                        <img
                            src={"https://placehold.jp/300x300.png"}
                            alt="kek"
                        />
                        INTELLECT MEDICAL GROUP - это медицинский центр со
                        специализациями программ реабилитации и эстетической
                        медицины, а также Школа осознанного здоровья.
                    </p>
                    <p>
                        В нашем медицинском центре специалисты помогут вам
                        проблемы с болью в спине, головными болями,
                        заболеваниями суставов, помочь со сколиозом и
                        нарушениями осанки, грыжами и протрузией позвонков, а
                        также с последствиями травм и операций.
                    </p>
                    <p>
                        В центре ведут прием высококлассные врачи: невролог,
                        ортопед, травматалог, кинезиолог, остеопат, манульный
                        терапевт.
                    </p>
                    <p>
                        IMed вобрал в себя лучшие традиции и мировой опыт
                        восстановительной медицины и профилактики. Мы гордимся
                        своей уникальной коллекцией массажных техник и
                        альтернативных оздоровительных методик в лучших традиция
                        восточных и западных школ, которые проводят наши опытные
                        мастера.
                    </p>
                    <p>
                        В нашем центре представлено более 80 видов массажа, от
                        самых распространенных видов массажа до видов массажа по
                        нашим авторским методикам. Мы предлагаем своим пациентам
                        как массаж для коррекции фигуры, так и
                        восстанавливающие, реабилитирующие виды массажа для
                        спины, ног и т.д.
                    </p>
                    <p>
                        Для нас нет понятия «Клиенты» — мы приобретаем «Друзей»,
                        которые с радостью рекомендуют нас своим близким и
                        любимым людям. Для наших любимых друзей создана Школа
                        осознанного здоровья, где мы научим быть здоровыми,
                        слышать свое тело, понимать, что происходит с вашим
                        организмом. Мы с большим удовольствием расскажем о
                        первопричинах нарушения здоровья и научим вас как можно
                        помочь себе.
                    </p>
                </article>
                <AboutGallery />
            </Box>
        </Layout>
    );
};

const AboutGallery = () => {
    const [stateToggler, setToggler] = useState({ toggler: false, slide: 1 });

    const photos = [
        "/api/static/da3173e5f976c2a0bc4d9378ae609c22.jpg",
        "/api/static/7aca0e8fc4c553d8a10b1f89a0756c34.jpg",
        "/api/static/df7232af58f2f471136f02f34843986d.jpg",
        "/api/static/da3173e5f976c2a0bc4d9378ae609c22.jpg",
        "/api/static/7aca0e8fc4c553d8a10b1f89a0756c34.jpg",
        "/api/static/df7232af58f2f471136f02f34843986d.jpg",
        "/api/static/da3173e5f976c2a0bc4d9378ae609c22.jpg",
        "/api/static/7aca0e8fc4c553d8a10b1f89a0756c34.jpg",
    ];

    const onClickHandler = (slide: number) => {
        setToggler({
            toggler: !stateToggler.toggler,
            slide: slide,
        });
    };

    return (
        <>  
        <div className={style.gallery}>
            {photos.map((item, i) => (
                <Photo
                    {...{ src: item, onClickHandler: onClickHandler, slide: ++i }}
                    key={i}
                />
            ))}
            </div>
            <FsLightbox
                toggler={stateToggler.toggler}
                sources={photos}
                slide={stateToggler.slide}
            />
        </>
    );
};

interface IPhoto {
    src: string;
    onClickHandler: any;
    slide: number;
}

const Photo = ({ src, onClickHandler, slide }: IPhoto) => {
    return (
        <div className={style.gallery__item}  onClick={() => onClickHandler(slide)}>
            <img className={style.gallery__photo} src={src} />
        </div>
    );
};

export default About;
