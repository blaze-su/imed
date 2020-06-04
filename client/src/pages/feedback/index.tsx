import { Feedback, IFeedback } from "@components/organisms";
import React, { useEffect } from "react";
import { Spinner, Title } from "@components/atoms";
import { useDispatch, useSelector } from "react-redux";

import { HOST_API } from "@keys";
import { Layout } from "@components/template";
import { fetchFeedbacks } from "@redux/actions";
import style from "./index.module.scss";
import { useReset } from "@components/template/resetToggle";

const url: string = `${HOST_API}/reviews`;
const Feedbacks = (props: any) => {
    const dispatch = useDispatch();
    useReset(dispatch);
    useEffect((): any => dispatch(fetchFeedbacks(url)), [url, dispatch]);
    const feedbackReducer = useSelector((store: any) => store.feedbackReducer);
    const { feedbacks, feedbackIsLoading } = feedbackReducer;

    return (
        <Layout
            isMobile={props.isMobile}
            title={"Intellect Medical Group"}
            description={"Это дескрипшен"}
            keywords={"Это ключевое слово"}
            breadcrumbs={[
                { title: "Главная", link: "/" },
                { title: "Отзывы", link: "/Feedback" },
            ]}
        >
            <Title text={"Отзывы"} />
            <section>
                {feedbackIsLoading ? (
                    <Spinner />
                ) : (
                    <div className={style.list}>
                        {feedbacks.map((item: IFeedback) => (
                            <Feedback {...item} key={item._id} />
                        ))}
                    </div>
                )}
            </section>
        </Layout>
    );
};

export default Feedbacks;
