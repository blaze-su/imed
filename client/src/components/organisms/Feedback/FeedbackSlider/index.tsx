import style from "./index.scss";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFeedbacks, toggleFormSign } from "@redux/actions";
import Slider from "react-slick";
import {
    ArrowNext,
    ArrowPrev,
    Button,
    Title,
    Spinner,
	Box
} from "@components/atoms";
import { Feedback, IFeedback } from "@components/organisms";
import { HOST_API } from "@keys";

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
                    onClick={() => dispatch(toggleFormSign(true))}
                />
            </Box>
        </div>
    );
};
