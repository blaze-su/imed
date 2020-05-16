import css from "./index.scss";
import Slider from "react-slick";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDoctors } from "@redux/actions";
import { ArrowNext, ArrowPrev, Spinner } from "@components/atoms/";
import { Doctor, IDoctor } from "@components/organisms";
import { HOST_API } from "@keys";

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
                dots: true,
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
                        <div className={css.item}>
                            <Doctor {...item} key={item._id} />
                        </div>
                    ))}
                </Slider>
            )}
        </div>
    );
};
