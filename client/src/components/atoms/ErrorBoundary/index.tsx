import React, {ReactElement} from 'react';

import {Button} from '../Button';
import Router from 'next/router';
import styles from './ErrorBoundary.module.scss';

interface IState {
    readonly hasError: boolean;
}

interface iProps {
    readonly children: ReactElement[]
}

export class ErrorBoundary extends React.Component<iProps, IState> {
    constructor(props: iProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
       console.log(error.message);
        return { hasError: true };
    }

    componentDidCatch() {
        this.setState({hasError: true});
        //добавить запись логов
    }

    render(){
        if (this.state.hasError) {
            return (
                <div className={styles.wrap}>
                    <h1 className={styles.title}>Что-то пошло не так.</h1>
                    <Button text={'Вернуться на главную'} onClick={() => Router.push('/')}/>
                </div>
            )
        }
        return this.props.children;
    };
}
