import React from 'react';
import Link from 'next/link';
import style from './index.scss';
import { IPhoto } from '@interfaces';

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
			<Link href={'/doctor/' + _id.slice(0, 6)}>
				<a className={style.link}>
					<img
						className={style.img}
						src={
							'http://localhost:3000/api/static/' + filesId[0].src
						}
						alt={name}
						title={name}
					/>
				</a>
			</Link>
			<div className={style.wrapper}>
				<Link href={'/doctor/' + _id.slice(0, 6)}>
					<a className={style.link}>
						<p className={style.name}>{name}</p>
					</a>
				</Link>
                {
                    specializationsId.map((item: ISpecialization, key: any) => (
                        <p key={key} className={style.position}>{item.title}</p>
                    ))
                }
				<p className={style.experience}>{experience}</p>
			</div>
		</div>
	);
};

export * from './DoctorsSlider';
