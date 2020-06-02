import "./page.scss"

import App from "next/app";
import MobileDetect from "mobile-detect";
import { Provider } from "react-redux";
import React from "react";
import configureStore from "../redux/store/configureStore";
import { isMobile } from "react-device-detect";
import { withRouter } from "next/router";

const store = configureStore();

interface IGetInitialProps {
    Component: any;
    ctx: any;
}
class MyApp extends App {
    static async getInitialProps({ Component, ctx }: IGetInitialProps) {
        let pageProps: any = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        if (ctx.req) {
            const md = new MobileDetect(ctx.req.headers["user-agent"]);
            pageProps.isMobile = md.mobile();
        }

        if (process.browser) {
            pageProps.isMobile = isMobile;
        }

        return { pageProps };
    }

    render(): JSX.Element {
        const { Component, pageProps, router } = this.props;
        return (
            <Provider store={store}>
                <App
                    pageProps={pageProps}
                    Component={Component}
                    router={router}
                />
            </Provider>
        );
    }
}

export default withRouter(MyApp);
