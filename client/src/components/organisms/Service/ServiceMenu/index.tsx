import { ILink, IService } from "@interfaces";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { HOST_API } from "@keys";
import Link from "next/link";
import { ServiceAccordion } from "@components/organisms";
import { Spinner } from "@components/atoms";
import { fetchServices } from "@redux/actions";
import style from "./index.scss";
import { useReset } from "@components/template/resetToggle";

interface IProps {
    serviceId: string;
    parentId: string;
    isMobile: string | null;
}

export const ServiceMenu = ({ serviceId, parentId, isMobile }: IProps) => {
    const url: string = `${HOST_API}/services`;
    const dispatch = useDispatch();
    useReset(dispatch);
    useEffect((): any => dispatch(fetchServices(url)), [url, dispatch]);
    const servicesReducer = useSelector((store: any) => store.servicesReducer);
    const { services, servicesIsLoading } = servicesReducer;

    // const category = findParent(services, serviceId);
    const category = services.find((s: IService) => s._id == parentId);

    console.log("menu-service", category);

    return (
        <nav>
            {servicesIsLoading ? (
                <Spinner />
            ) : category ? (
                isMobile ? (
                    <ServiceAccordion
                        title={category.title}
                        items={category.links}
                        key={category._id}
                    />
                ) : (
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
                )
            ) : null}
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
