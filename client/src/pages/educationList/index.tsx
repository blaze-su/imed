import style from './index.scss';
import React from 'react';
import Title from '../../components/atoms/Title';
import Sale, { ISale } from '../../components/molecules/Sale';
import {useDispatch} from 'react-redux';
import useReset from '../../components/template/resetToggle';
import Layout from '../../components/organisms/Layout';

const breadcrumb = [{title: 'Главная', link: '/'}, {title: 'Центр осознанного здоровья', link: '/education'}];
const data = {
    _id: 'f334f4',
    title: 'Повышение квалификации по общему массажу лица и тела',
    date: '20.09.2019',
    photo: {
        "src": "http://r25.fss.ru/files/160114/vrachi2.jpg",
        "_id": "oj984983j"
    },
    link: '/education/123',
};

const arr = [data, data, data];

const EducationList = () => {
    const dispatch = useDispatch();
    useReset(dispatch);
    return (
        <Layout title={'Это тайлтл'} description={'Это дескрипшен'} keywords={'Это ключевое слово'} breadcrumbs={breadcrumb}>
            <Title text={'Центр осознанного здоровья'}/>
            <section>
                <h2 className={style.subTitle}>Обучение по направлению "Дерматовенерология"</h2>
                <div className={style.wrap}>
                    <p className={style.text}>
                        Дерматовенерология - дистанционное обучение в МУИРКак раздел медицины, дерматовенерология соединяет
                        в себе два направления: диагностика и лечение кожных заболеваний (а также волос и ногтей) и
                        инфекций,
                        передающихся преимущественно половым путем. Кожные заболевания, вызванные аллергиями или теми
                        же инфекциями, широко распространены среди населения. Нередко они являются признаками дисфункций
                        внутренних органов и систем организма человека. Курсы повышения квалификации по программе
                        «Дерматовенерология» предназначены для специалистов с профильным высшим медицинским образованием.
                        Пройдя обучение, врач дерматолог-венеролог получит актуальные знания по специальности, а также
                        документы о дополнительном образовании, которые позволят продолжить врачебную практику медицинских
                        учреждениях: удостоверение установленного образца и сертификат специалиста государственного образца.
                    </p>
                    <img className={style.img} src='https://kyky.org/uploads/image/file/25307/4404445996_8fe2a7b067_o.jpg' alt='Центр осознанного здоровья'/>
                </div>
                <p className={style.text}>
                    Условия обучения дерматологов и венерологов на курсах Прием на курс профессиональной переподготовки
                    осуществляется без конкурса, на основании документов о высшем медицинском образовании и прохождении
                    послевузовского обучения; Учиться на курсах могут только дипломированные врачи (дерматологи,
                    венерологи); Учебный процесс организован на основе системы очно-заочного образования, допускающей
                    использование в процессе обучения дистанционных образовательных технологий, в зависимости от уровня
                    подготовки слушателя. Теоретическую часть программы специалисту предстоит изучить самостоятельно,
                    пользуясь доступом к образовательному порталу Академии, а практику пройти в действующих учреждениях
                    здравоохранения под руководством преподавателей курса. После успешной итоговой аттестации слушатели
                    получают документы: удостоверение о повышении квалификации (установленного образца) и
                    государственный
                    сертификат специалиста, дерматолога – венеролога.
                </p>
            </section>
            <section>
                <h2 className={style.subTitle}>События</h2>
                <div className={style.event}>
                    {arr.map((item: ISale) => <Sale {...item} key={item._id}/>)}
                </div>
            </section>
        </Layout>
    );
};

export default EducationList;
