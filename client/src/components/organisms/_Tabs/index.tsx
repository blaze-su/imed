import style from './index.scss';
import React, {useState} from 'react';

export interface ITabs {
    pages: any;
    currentTab: number;
    links: {
        title: string;
        link: string;
    }
}

const Tabs = (props: any) => {
    const {links, currentTab, children} = props;
    const [tabIndex, setTabIndex] = useState(currentTab);
    return (
        <div className={style.wrap}>
            <ul className={style.list}>{links.map(
                (link: string, index: number) => index === tabIndex ?
                    <li className={style.itemActive}
                        onClick={() => setTabIndex(index)}
                        key={style.list + index}>
                        {link}
                    </li>
                    :
                    <li className={style.item}
                        onClick={() => setTabIndex(index)}
                        key={style.list + index}>
                        {link}
                    </li>
            )}
            </ul>
            {<div className={style.tabs}>{children[tabIndex]}</div>}
        </div>
    );
};

export default Tabs;
