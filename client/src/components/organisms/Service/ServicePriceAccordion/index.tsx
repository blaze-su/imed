import React, { useEffect, useState, useRef } from "react";
import style from "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { useReset } from "@components/template/resetToggle";
import { fetchPrice } from "@redux/actions";
import { Button, Spinner, ErrorBoundary, IsOpenMarker } from "@components/atoms";

interface IPrice {
    _id: string;
    title: string;
    duration?: string;
    cost: string;
    description?: string;
}

export const ServicePriceAccordion = () => {
    const serviceId = "5e187faf3c653e28d04a44e4";

    const url: string = `http://localhost:3000/api/prices/service/${serviceId}`;
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
                        <Panel {...price} />
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

    console.log(_id);

    return (
        <section key={_id}>
            <div className={style.header} onClick={toggleAccordion}>
                <h4 className={style.title}>{title}</h4>
                <div className={style.duration}>{duration}</div>
                <div className={style.cost}>{cost} руб.</div>
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
