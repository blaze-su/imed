import { Field, WrappedFieldProps, reduxForm } from "redux-form";
import React, { useRef } from "react";
import {
    maxLength,
    minLength,
    normalizeName,
    normalizePhone,
    phoneLength,
    required,
} from "@components/template/validation";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "@components/atoms";
import style from "./FormDefault.module.scss";
import { toggleFormDefault } from "@redux/actions";

const minLength2 = minLength(2);
const maxLength30 = maxLength(30);

interface RenderFieldProps extends WrappedFieldProps {
    placeholder: string;
    type: string;
    label: string;
}

export const renderField = (props: RenderFieldProps) => {
    const {
        input,
        label,
        type,
        meta: { touched, error },
    } = props;

    return (
        <div>
            <label>{label}</label>
            <div className={style.field}>
                <input
                    className={style.input}
                    {...input}
                    placeholder={label}
                    type={type}
                />
                {touched && error && (
                    <span className={style.error}>{error}</span>
                )}
            </div>
        </div>
    );
};

const Form = (props: any) => {
    const dispatch = useDispatch();
    const formRef = useRef<HTMLFormElement>(null);
    const formSuccess = useSelector(
        (store: any) => store.formReducer.formSuccess
    );

    return (
        <form
            ref={formRef}
            className={style.form}
            onSubmit={props.handleSubmit}
        >
            {formSuccess == false ? (
                <>
                    <div
                        className={style.close}
                        onClick={() => dispatch(toggleFormDefault(false))}
                    >
                        &times;
                    </div>
                    <span className={style.title}>Записаться на прием</span>
                    <label className={style.label} htmlFor="name">
                        Напишите как к Вам обращаться *
                        <Field
                            name={"name"}
                            placeholder={"Иван Васильевич"}
                            require={"true"}
                            type={"text"}
                            normalize={normalizeName}
                            validate={[required, minLength2, maxLength30]}
                            component={renderField}
                        />
                    </label>
                    <label className={style.label} htmlFor="phone">
                        Укажите № контактного телефона *
                        <Field
                            name={"phone"}
                            placeholder={"+7(***)***-**-**"}
                            require={"true"}
                            type={"tel"}
                            normalize={normalizePhone}
                            validate={[required, phoneLength]}
                            component={renderField}
                        />
                    </label>
                    <label className={style.confident}>
                        <Field
                            className={style.checkbox}
                            name={"confidentPolitic"}
                            type={"checkbox"}
                            component={"input"}
                        />
                        <span>
                            Подтверждаю свое согласие на обработку и хранение
                            моих персональных данных в соответствии с
                            <a href={"/"} className={style.confidentLink}>
                                пользовательским соглашением
                            </a>
                        </span>
                    </label>
                    <Button
                        text={"Отправить"}
                        onClick={() => formRef.current?.handleSubmit}
                    />
                </>
            ) : (
                <>
                    <h2>Заявка принята</h2>
                    <p className={style.center}>Спасибо что выбрали <b>Intellect Medical Group</b>. В течении часа Вам перезвонит администаратор.</p>
                    <Button onClick={() => dispatch(toggleFormDefault(false))} text="На сайт"></Button>
                </>
            )}
        </form>
    );
};

export const FormDefault = reduxForm({
    form: "formDefault",
})(Form);
