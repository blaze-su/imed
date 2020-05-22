import { ArrowNext, ArrowPrev, Spinner } from "@components/atoms/";
import { Doctor, IDoctor } from "@components/organisms";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { HOST_API } from "@keys";
import Slider from "react-slick";
import css from "./DoctorsSlider.module.scss";
import { fetchDoctors } from "@redux/actions";

const settings = {
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 3,
    speed: 300,
    nextArrow: <ArrowNext isBanner={false} />,
    prevArrow: <ArrowPrev isBanner={false} />,
    responsive: [
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 541,
            settings: {
                dots: false,
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

export const DoctorsSlider = () => {
    const url: string = `${HOST_API}/doctors`;
    const dispatch = useDispatch();
    useEffect((): any => dispatch(fetchDoctors(url)), [url, dispatch]);
    const doctorsReducer = useSelector((store: any) => store.doctorsReducer);
    const { doctors, doctorsIsLoading } = doctorsReducer;
    console.log("doctors", doctors);

    return (
        <div className={css.wrap}>
            {doctorsIsLoading ? (
                <Spinner />
            ) : (
                <Slider ref={(slider) => slider} {...settings}>
                    {doctors.map((item: IDoctor) => (
                        <div className={css.item} key={item._id}>
                            <Doctor {...item} />
                        </div>
                    ))}
                </Slider>
            )}
        </div>
    );
};
