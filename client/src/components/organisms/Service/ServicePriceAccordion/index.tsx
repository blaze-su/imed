import {
    Button,
    ErrorBoundary,
    IsOpenMarker,
    Spinner,
} from "@components/atoms";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { HOST_API } from "@keys";
import { fetchPrice } from "@redux/actions";
import style from "./ServicePrice.module.scss";
import { useReset } from "@components/template/resetToggle";

interface IPrice {
    _id: string;
    title: string;
    duration?: string;
    cost: string;
    description?: string;
}


interface IProps {
    serviceId: string
}

export const ServicePriceAccordion = ({serviceId}: IProps) => {
    //const serviceId = "5e187faf3c653e28d04a44e4";

    const url: string = `${HOST_API}/prices/service/${serviceId}`;
    const dispatch = useDispatch();
    useReset(dispatch);
    useEffect((): any => dispatch(fetchPrice(url)), [url, dispatch]);
    const priceReducer = useSelector((store: any) => store.priceReducer);
    const { prices, pricesIsLoading } = priceReducer;

    return (
        <div>
            {pricesIsLoading ? (
                <Spinner />
            ) : (
                <ErrorBoundary>
                    {prices.map((price: IPrice) => (
                        <Panel {...price} key={price._id} />
                    ))}
                </ErrorBoundary>
            )}
        </div>
    );
};

const Panel = (props: IPrice) => {
    const { _id, title, duration, cost, description } = props;

    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");

    const contentRef = useRef<HTMLDivElement | null>(null);

    const toggleAccordion = () => {
        setActiveState(setActive === "" ? "active" : "");

        const node = contentRef.current;
        if (node) {
            setHeightState(
                setActive === "active" ? "0px" : `${node.scrollHeight}px`
            );
        }
    };

    return (
        <section key={_id}>
            <div className={style.header} onClick={toggleAccordion}>
                <h4 className={style.title}>{title}</h4>
                <div className={style.duration}>{duration}</div>
                <div className={style.cost}>{cost}</div>
                <IsOpenMarker isOpen={setActive === "active" ? true : false} />
            </div>
            <section
                className={style.content}
                ref={contentRef}
                style={{ maxHeight: `${setHeight}` }}
            >
                <div className={style.content__box}>
                    <p className={style.description}>{description}</p>
                    <Button
                        text="Записаться на прием"
                        onClick={() => console.log("click button")}
                    />
                </div>
            </section>
        </section>
    );
};
