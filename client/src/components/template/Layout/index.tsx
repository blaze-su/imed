import React, { Fragment, useState } from "react";
import { PageHead } from "../Head";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Anchor } from "@components/atoms";
import { Breadcrumbs } from "@components/molecules";
import { ILink } from "@interfaces";

interface ILayout {
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
            <Header />
            <section onWheel={() => setAnchorIsVisible(window.pageYOffset > 500)}>
                <Breadcrumbs items={props.breadcrumbs} />
                {props.children}
            </section>
            <Footer />
            {anchorIsVisible ? <Anchor /> : null}
        </Fragment>
    );
};
