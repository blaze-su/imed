import React, { Fragment, useState } from "react";
import { PageHead } from "../Head";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Anchor, Box } from "@components/atoms";
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
            <main onWheel={() => setAnchorIsVisible(window.pageYOffset > 500)}>
                <Box>
                    <Breadcrumbs items={props.breadcrumbs} />
                	{props.children}
				</Box>
            </main>
            <Footer />
            {anchorIsVisible ? <Anchor /> : null}
        </Fragment>
    );
};
