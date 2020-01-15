import React, { useState } from "react";
import style from "./index.scss";

export interface ITabs {
    currentTab?: number | null;
    titles: string[];
    children: any;
}

export const Tabs = (props: ITabs) => {
    const { titles, currentTab, children } = props;
    const [tabIndex, setTabIndex] = useState(currentTab || 0);

    return (
        <div>
            <nav className={style.nav}>
                {titles.map((title: string, index: number) => (
                    <a
                        className={tabIndex === index ? style.tab__active : style.tab}
                        onClick={() => setTabIndex(index)}
                        key={index}
                    >
                        {title}
                    </a>
                ))}
            </nav>
            {<section className={style.panel}>{children[tabIndex]}</section>}
        </div>
    );
};
