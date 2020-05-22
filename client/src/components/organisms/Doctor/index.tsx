import { HOST_IMAGE } from '@keys'
import { IPhoto } from '@interfaces';
import Link from 'next/link';
import React from 'react';
import style from './Doctor.module.scss';

interface ISpecialization {
	_id: string;
	title: string;
}

export interface IDoctor {
	_id: string;
	name: string;
	filesId: IPhoto[];
	specializationsId: ISpecialization[];
	experience: string;
	key?: string;
}

export const Doctor = ({
	name,
	specializationsId,
	experience,
	filesId,
	_id
}: IDoctor) => {
	return (
		<div className={style.item}>
			<Link href={`/doctors/${_id}`}>
				<a className={style.link}>
					<img
						className={style.img}
						src={
							`${HOST_IMAGE}/${filesId[0].src}`
						}
						alt={name}
						title={name}
					/>
				</a>
			</Link>
			<div className={style.wrapper}>
				<Link href={`/doctors/${_id}`}>
					<a className={style.link}>
						<p className={style.name}>{name}</p>
					</a>
				</Link>
				<div className={style.positions}>
                {
                    specializationsId.map((item: ISpecialization, key: any) => (
                        <p key={key} className={style.position}>{item.title}</p>
                    ))
                }
				</div>
				<p className={style.experience}>{experience}</p>
			</div>
		</div>
	);
};

export * from './DoctorsSlider';
export * from './DoctorsList';
