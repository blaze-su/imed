import {FORM_FAILED, FORM_SUCCESS, SENDING_FORM} from './actionTypes';
import {request} from './index';

export const sendingForm = (bool: any) => ({type: SENDING_FORM, payload: bool});
export const formSuccess = (bool: any) => ({type: FORM_SUCCESS, payload: bool});
export const formFailed = (bool: any) => ({type: FORM_FAILED, payload: bool});

export const sendForm = (data: FormData) => (dispatch: request) =>
{
    const url: string = 'http://kasparov-store.ru/add.php';
    dispatch(sendingForm(true));
    console.error(JSON.stringify(data));
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data)
    })
        .then(response => console.log(response))
        .then(() => dispatch(sendingForm(false)))
        .then(() => dispatch(formSuccess(true)))
        .catch((e: Error) => {
            console.error(e.message);
            dispatch(formFailed(true));
        });
};
