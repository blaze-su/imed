import style from './index.scss';
import React, {ReactElement, useState} from 'react';

export type ILinks = {title: string; count: number}

export interface ITabs {
    links: ILinks[];
    pages?: any;
    children: ReactElement[];
}

const Tabs = (props: ITabs) => {
    const [tabIndex, setTabIndex] = useState(0);
    const {links, children} = props;
    return (
        <div className={style.wrap}>
            <ul className={style.list}>{links.map(
                ({title, count}: ILinks, index: number) => index === tabIndex ?
                    <li className={style.itemActive} onClick={() => setTabIndex(index)} key={style.list + index}>
                        <span>{title}</span>
                        <span className={style.itemNumber}>{count}</span>
                    </li>
                    :
                    <li className={style.item} onClick={() => setTabIndex(index)} key={style.list + index}>
                        <span>{title}</span>
                        <span className={style.itemNumber}>{count}</span>
                    </li>
            )}
            </ul>
            <div className={style.tabs}>{children[tabIndex]}</div>
        </div>
    );
};

export default Tabs;
