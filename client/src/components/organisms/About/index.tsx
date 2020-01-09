import React from 'react';
import style from './index.scss';

export const About = () => {
    return (
        <div className={style.wrap}>
            <div className={style.wrapText}>
                <p className={style.description}>INTELLECT MEDICAL GROUP - это медицинский центр со специализациями
                    программ реабилитации и эстетической медицины, а также Школа осознанного здоровья.</p>
                <p className={style.description}>В нашем медицинском центре специалисты помогут вам проблемы с болью
                    в спине, головными болями, заболеваниями суставов, помочь со сколиозом и нарушениями осанки,
                    грыжами и протрузией позвонков, а также с последствиями травм и операций.</p>
                <p className={style.description}>В центре ведут прием высококлассные врачи: невролог, ортопед,
                    травматалог, кинезиолог, остеопат, манульный терапевт.</p>
                <p className={style.description}>IMed вобрал в себя лучшие традиции и мировой опыт восстановительной
                    медицины и профилактики. Мы гордимся своей уникальной коллекцией массажных техник и альтернативных
                    оздоровительных методик в лучших традиция восточных и западных школ, которые проводят наши опытные мастера.</p>
            </div>
            <img src='../../../statics/img/c.jpg' alt=''/>
            <img className={style.img} src={'http://www.koreanspace.ru/wp-content/uploads/2016/06/vrachi22.jpg'} alt='kek' />
        </div>
    );
};