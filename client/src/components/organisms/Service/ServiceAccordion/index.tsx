import React, { useState, useRef } from "react";
import Link from "next/link";
import style from "./index.scss";
import { ILink } from "@interfaces";
import { IsOpenMarker } from "@components/atoms";

interface IProps {
    title: string;
    items: ILink[];
}

export const ServiceAccordion = ({ title, items }: IProps) => {
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
        <div className={style.accordion}>
            <div className={style.head} onClick={toggleAccordion}>
                <h3 className={style.title}>{title}</h3>
                <IsOpenMarker isOpen={setActive === "active" ? true : false} />
            </div>
            <div
                className={style.content}
                ref={contentRef}
                style={{ maxHeight: `${setHeight}` }}
            >
                <nav className={style.nav}>
                    {items.map(({ _id, title }: ILink) => (
                        <Link key={_id} href={`/services/${_id}`}>
                            <a className={style.link}>{title}</a>
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    );
};
