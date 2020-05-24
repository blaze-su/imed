import React, { Fragment, useState } from "react";

import { Anchor } from "@components/atoms";
import { Breadcrumbs } from "@components/molecules";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { ILink } from "@interfaces";
import { PageHead } from "../Head";

interface ILayout {
    isMobile: string | null
    title: string;
    description: string;
    keywords: string;
    breadcrumbs: ILink[] | null;
    children: any;
}

export const Layout = (props: ILayout) => {
    const [anchorIsVisible, setAnchorIsVisible] = useState(false);

    return (
        <Fragment>
            <PageHead
                title={props.title}
                description={props.description}
                keywords={props.keywords}
            />
            <Header isMobile={props.isMobile}/>
            <section onWheel={() => setAnchorIsVisible(window.pageYOffset > 500)}>
                <Breadcrumbs items={props.breadcrumbs} />
                {props.children}
            </section>
            <Footer />
            {anchorIsVisible ? <Anchor /> : null}
        </Fragment>
    );
};
