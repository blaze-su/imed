import React from 'react'; 
import { IDoctor, Doctor } from '@components/organisms';
import style from './index.scss';

interface IDoctorsList {
    doctors: IDoctor[];
}

export const DoctorsList = ({ doctors }: IDoctorsList) => (
    <div className={style.case}>
        {doctors.map((doctor: IDoctor) => (
            <div className={style.item}><Doctor {...doctor} /></div>
        ))}
    </div>
);