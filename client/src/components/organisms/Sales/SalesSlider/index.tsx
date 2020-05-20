import { ArrowNext, ArrowPrev, Spinner } from "@components/atoms";
import { ISale, Sale } from "../Sale";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { HOST_API } from "@keys";
import Slider from "react-slick";
import { fetchSales } from "@redux/actions";
import style from "./SalesSlider.module.scss";

const settings = {
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 4,
    nextArrow: <ArrowNext isBanner={false} />,
    prevArrow: <ArrowPrev isBanner={false} />,
    speed: 300,
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

export const SalesSlider = () => {
    const url: string = `${HOST_API}/promos`;
    const dispatch = useDispatch();
    useEffect((): any => dispatch(fetchSales(url)), [url, dispatch]);
    const salesReducer = useSelector((store: any) => store.salesReducer);
    const { sales, salesIsLoading } = salesReducer;

    return (
        <div className={style.wrap}>
            {salesIsLoading ? (
                <Spinner />
            ) : (
                <Slider ref={(slider) => slider} {...settings}>
                    {sales.map((item: ISale) => (
                        <div className={style.item} key={item._id}>
                            <Sale {...item} />
                        </div>
                    ))}
                </Slider>
            )}
        </div>
    );
};
