import { ILink } from '@interfaces'

export interface IService {
    _id: string;
    title: string;
    sort: number;
    links: ILink[];
}
