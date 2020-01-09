import React from 'react';
import App from 'next/app';
import {Provider} from 'react-redux';
import { withRouter } from 'next/router'
import configureStore from '../redux/store/configureStore';

const store = configureStore();

class MyApp extends App{
    render(): JSX.Element {
        const { Component, pageProps, router} = this.props;
        return  <Provider store={store}>
                    <App pageProps={pageProps} Component={Component} router={router}/>
                </Provider>;
    }
}

export default withRouter(MyApp);
