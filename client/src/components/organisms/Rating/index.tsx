import React from 'react';
import css from './Rating.module.scss';

export interface IRating{
    link: string;
    rating: number;
    feedback: string;
    img: string;
}

const RatingItem = (props: IRating) => {
    const {link, rating, feedback, img} = props;
    return (
        <div className={css.item}>
            <a href={link} target="_blank" className={css.itemHeader}>
                <img src={img} alt={link}/>
            </a>
            <div className={css.itemContent}>
                <div className={css.content}>
                    <span className={css.number}>{rating}</span>
                    <div className={css.raiting}>
                        <img src='https://vrukah.com/bitrix/templates/vrukah_template/assets/img/star-big.png' alt='raiting'/>
                        <img src='https://vrukah.com/bitrix/templates/vrukah_template/assets/img/star-big.png' alt='raiting'/>
                        <img src='https://vrukah.com/bitrix/templates/vrukah_template/assets/img/star-big.png' alt='raiting'/>
                        <img src='https://vrukah.com/bitrix/templates/vrukah_template/assets/img/star-big.png' alt='raiting'/>
                        <img src='https://vrukah.com/bitrix/templates/vrukah_template/assets/img/star-big-empty.png' alt='raiting'/>
                    </div>
                </div>
                <a href={link} target="_blank" className={css.feedback}>{feedback}</a>
            </div>
        </div>
    );
};

export const Rating = () => {
    return (
        <div className={css.wrap}>
            <RatingItem
                link={'https://krd.docdoc.ru/'}
                rating={4}
                feedback={'62 Отзыва'}
                img={'https://vrukah.com/upload/iblock/264/264cc4cc93ef44a8d0fae71dd4185933.png'}/>
            <RatingItem
                link={'https://www.google.ru/'}
                rating={4}
                feedback={'62 Отзыва'}
                img={'https://vrukah.com/upload/iblock/9e0/9e07e36172f99c54639f5766d660dd4e.png'}/>
            <RatingItem
                link={'https://prodoctorov.ru/krasnodar/lpu/39201-alma-medikal-spa/'}
                rating={4}
                feedback={'62 Отзыва'}
                img={'https://vrukah.com/upload/iblock/067/067fdf6ddb87d8878b49c211a8754c17.png'}/>
            <RatingItem
                link={'https://yandex.ru'}
                rating={4}
                feedback={'62 Отзыва'}
                img={'https://vrukah.com/upload/iblock/175/1758b140bcc48b26fdfd842808a09b3f.png'}/>
        </div>
    );
};
