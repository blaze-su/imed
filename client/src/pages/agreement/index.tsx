import { Layout } from "@components/template";
import React from "react";
import { Title } from "@components/atoms";
import style from "./index.module.scss";
import { useDispatch } from "react-redux";
import { useReset } from "@components/template/resetToggle";

const Agreement = (props: any) => {
    const dispatch = useDispatch();
    useReset(dispatch);
    return (
        <Layout
            isMobile={props.isMobile}
            title={"Intellect Medical Group"}
            description={"Это дескрипшен"}
            keywords={"Это ключевое слово"}
            breadcrumbs={null}
        >
            <Title text={"Пользовательское соглашение"} />
            <section className={style.wrap}>
                <p className={style.desc}>
                    1. Пользователь, заполняющий формы на сайте, дает согласие
                    на обработку Оператором своих персональных данных, то есть
                    совершение, в том числе, следующих действий:
                </p>
                <ul className={style.list}>
                    <li className={style.item}>
                        обработку (включая сбор, систематизацию, накопление,
                        хранение, уточнение (обновление, изменение);
                    </li>
                    <li className={style.item}>использование;</li>
                    <li className={style.item}>обезличивание;</li>
                    <li className={style.item}>блокирование;</li>
                    <li className={style.item}>
                        уничтожение персональных данных;
                    </li>
                    <li className={style.item}>
                        уничтожение персональных данных;
                    </li>
                    <li className={style.item}>
                        уничтожение персональных данных.
                    </li>
                </ul>
                <p className={style.desc}>
                    при этом общее описание вышеуказанных способов обработки
                    данных приведено в Федеральном законе от 27.07.2006 №
                    152-ФЗ, а также на передачу такой информации третьим лицам,
                    в случаях, установленных нормативными документами
                    вышестоящих органов и законодательством.
                </p>
                <p className={style.desc}>
                    2. Оператор использует персональные данные Пользователя в
                    целях:
                </p>
                <ul className={style.list}>
                    <li className={style.item}>
                        получения запроса от Пользователя на Сайте;
                    </li>
                    <li className={style.item}>
                        для оповещения об акциях, проводимых администрацией
                        Сайта;
                    </li>
                    <li className={style.item}>
                        получение Пользователем сообщений подписки, в рамках
                        участника по условиям работы Сайта;
                    </li>
                    <li className={style.item}>
                        получения Пользователем персонализированной рекламы;
                    </li>
                    <li className={style.item}>
                        оформления запросов Пользователем настоящего Интернет
                        ресурса сайта, получение уведомлений и ответов, на
                        предмет текущего запроса.
                    </li>
                </ul>
                <p className={style.desc}>
                    3. Если предусмотрено при регистрации заявки на Сайте,
                    Пользователь предоставляет следующую информацию: Фамилия,
                    Имя, Отчество, контактный номер телефона, адрес электронной
                    почты.
                </p>
                <p className={style.desc}>
                    4. Настоящее согласие действует бессрочно.
                </p>
                <p className={style.desc}>
                    5. Настоящее согласие может быть отозвано Пользователем в
                    любой момент по соглашению сторон. В случае неправомерного
                    использования предоставленных данных соглашение отзывается
                    письменным заявлением субъекта персональных данных.
                </p>
                <p className={style.desc}>
                    6. Субъект по письменному запросу имеет право на получение
                    информации, касающейся обработки его персональных данных (в
                    соответствии с п.4 ст.14 Федерального закона от 27.06.2006 №
                    152-ФЗ).
                </p>
            </section>
        </Layout>
    );
};

export default Agreement;
