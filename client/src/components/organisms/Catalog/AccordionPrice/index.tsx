import React, {useState} from 'react';

import { Button } from '@components/atoms';
import Link from 'next/link';
import style from './AccordionPrice.module.scss';

export interface IPrice {
    title: string;
    price: {
        time: string;
        cost: string;
    };
    data: {
        text?: string;
        priceList?: Array<{ name: string; price: string}>;
    };
    article: string | null;
    key?: string;
}

const Price = (props: IPrice) => {
    const [active, toggleActive] = useState(false);
    const {title, data, price, article} = props;
    const {priceList, text} = data;
console.log(priceList);
    return (
        <div className={style.wrapper}>
            <div className={style.item} onClick={() => toggleActive(!active)}>
                <span className={style.title}>{title}</span>
                <span className={style.time}>{price.time}</span>
                <span className={style.cost}>{price.cost}</span>
                <div className={active ? style.crossActive : style.cross}/>
            </div>
            <div className={active ? style.innerListActive : style.innerList}>
                <p>{text}</p>
                {priceList !== undefined ?
                    priceList.map(
                        ({name, price}, index: number) => (
                            <div className={style.innerPrice} key={style.innerPrice + index}>
                                <span>{name}</span><span>{price}</span>
                            </div>
                        )) : ''}
                <div className={style.bottom}>
                    {article !== null ? <Link href={article}><a className={style.link}>Узнать подробности</a></Link> : ''}
                   <Button text={'Записаться на прием'} onClick={() => console.log(234)}/>
                </div>
            </div>
        </div>
    );
};

export default Price;
