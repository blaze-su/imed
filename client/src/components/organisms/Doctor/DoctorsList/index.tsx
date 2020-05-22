import { Doctor, IDoctor } from '@components/organisms';

import React from 'react';
import style from './index.scss';

interface IDoctorsList {
    doctors: IDoctor[];
}

export const DoctorsList = ({ doctors }: IDoctorsList) => (
    <div className={style.case}>
        {doctors.map((doctor: IDoctor) => (
            <div className={style.item} key={doctor._id}><Doctor {...doctor} /></div>
        ))}
    </div>
);