import React from 'react';
import style from './Feedback.module.scss';

export interface IFeedback {
    _id: string;
    date: string;
    name: string;
    doctor: string;
    text: string;
}

export const Feedback = (props: IFeedback) => {

    const {doctor, text, name,  date} = props;

    return (
        <div className={style.wrap}>
            <div className={style.item}>
                <div className={style.patient}>
                    <span>Пациент </span>
                    <strong>`{`${name} ${date.slice(1, 10)}`}</strong>
                </div>
                <div className={style.feedback}>
                    <p>{text}</p>
                </div>
                <div className={style.doctor}>
                    <span>Врач </span>
                    <strong>{doctor}</strong>
                </div>
            </div>
        </div>
    );
};

export * from './FeedbackSlider';