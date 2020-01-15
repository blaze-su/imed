import React, { useEffect } from "react";
import style from "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { useReset } from "@components/template/resetToggle";
import { fetchServices } from "@redux/actions";
import { Spinner } from "@components/atoms";
import { IService, ILink } from "@interfaces";
import Link from "next/link";

interface IProps {
    serviceId: string;
    parentId: string;
}

export const ServiceMenu = ({ serviceId, parentId }: IProps) => {
    const url: string = "http://localhost:3000/api/services";
    const dispatch = useDispatch();
    useReset(dispatch);
    useEffect((): any => dispatch(fetchServices(url)), [url, dispatch]);
    const servicesReducer = useSelector((store: any) => store.servicesReducer);
    const { services, servicesIsLoading } = servicesReducer;

    // const category = findParent(services, serviceId);
    const category = services.find((s: IService) => s._id == parentId);

    return (
        <nav>
            {servicesIsLoading ? (
                <Spinner />
            ) : category ? (
                category.links.map(({ _id, title }: ILink) => (
                    <Link key={_id} href={`/services/${_id}`}>
                        <a
                            className={
                                serviceId === _id
                                    ? style.link__active
                                    : style.link
                            }
                        >
                            {title}
                        </a>
                    </Link>
                ))
            ) : (
                ""
            )}
        </nav>
    );
};

// const findParent = (
//     services: IService[],
//     serviceId: string | string[]
// ): IService | null => {
//     let res: IService | null = null;

//     services.map(category => {
//         category.links.map(({ _id }) => {
//             if (_id == serviceId) {
//                 // console.log([category, _id]);
//                 res = category;
//                 return;
//             }
//         });
//     });

//     return res;
// };
