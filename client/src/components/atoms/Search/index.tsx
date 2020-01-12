import style from './index.scss';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import {toggleSearch} from '@redux/actions';

const _search = (props: any) => {
    const active = useSelector((store: any) => store.generalReducer.toggleSearch);
    const search = useSelector((store: any) => store.formReducer.search);
    const dispatch = useDispatch();
    return (
        <form className={style.wrapper} onSubmit={props.onSubmit}>
            <div className={style.searchBox}>
                <Field
                    component={'input'}
                    name='request'
                    type='text'
                    placeholder='Поиск по сайту'
                    className={active ? style.inputActive : style.input}/>
                {active && !(search.values === undefined) ?
                    <button className={active ? style.btnAnimate : style.btn}/>
                    :
                    <div
                        onClick={() => dispatch(toggleSearch(!active))}
                        className={active ? style.btnAnimate : style.btn}/>}
            </div>
        </form>
    );
};

export const Search = reduxForm({form: 'search'})(_search);