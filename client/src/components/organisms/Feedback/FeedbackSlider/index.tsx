import {
    ArrowNext,
    ArrowPrev,
    Box,
    Button,
    Spinner,
    Title
} from "@components/atoms";
import { Feedback, IFeedback } from "@components/organisms";
import React, { useEffect } from "react";
import { fetchFeedbacks, toggleFormDefault } from "@redux/actions";
import { useDispatch, useSelector } from "react-redux";

import { HOST_API } from "@keys";
import Slider from "react-slick";
import style from "./FeedbackSlider.module.scss";

const settings = {
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 300,
    swipeToSlide: false,
    nextArrow: <ArrowNext isBanner={false} />,
    prevArrow: <ArrowPrev isBanner={false} />,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                swipeToSlide: true,
                dots: false
            }
        }
    ]
};

export const FeedbackSlider = () => {
    const url: string = `${HOST_API}/reviews`;
    const dispatch = useDispatch();
    useEffect((): any => dispatch(fetchFeedbacks(url)), [url, dispatch]);
    const feedbackReducer = useSelector((store: any) => store.feedbackReducer);
    const { feedbacks, feedbackIsLoading } = feedbackReducer;
    console.log("feedbacks", feedbacks);

    return (
        <div className={style.wrap}>
            <Box>
                <Title text={"Отзывы"} type={"white"} />
                <div className={style.container}>
                    {feedbackIsLoading ? (
                        <Spinner />
                    ) : (
                        <Slider ref={slider => slider} {...settings}>
                            {feedbacks.map((item: IFeedback) => (
                                <Feedback {...item} key={item._id} />
                            ))}
                        </Slider>
                    )}
                </div>
                <Button
                    text="Записаться на прием"
                    type="white"
                    onClick={() => dispatch(toggleFormDefault(true))}
                />
            </Box>
        </div>
    );
};
