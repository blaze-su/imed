type Validator = string | undefined;

export const required = (value: string): Validator => value ? undefined : 'Required';

export const name = (value: string): Validator =>
    /[a-zA-Z]+/g.test(value)
        ? 'Invalid name'
        : undefined;

export const maxLength = (max: number) =>
    (value: string): Validator =>
        (value && value.length > max)
            ? `Must be ${max} characters or less`
            : undefined;

export const minLength = (min: number) =>
    (value: string): Validator =>
        (value && value.length < min)
            ? `Must be ${min} characters or more`
            : undefined;

export const phoneLength = (value: string): Validator =>
       value && value.length < 18
            ? `Invalid phone number`
            : undefined;

export const email = (value: string): Validator =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email address'
        : undefined;

export const upper = (value: string) => value.toUpperCase();

export const normalizePhone = (value: string) => {
    const matrix: string = "+7 (___) ___-__-__";
    const def = matrix.replace(/\D/g, "");
    let val = value.replace(/\D/g, "");
    let i = 0;
    if (def.length >= val.length) val = def;

    return matrix.replace(/./g, (a) =>
        (/[_\d]/.test(a) && i < val.length)
            ? val.charAt(i++)
            : i >= val.length ? "" : a);
};

export const normalizeName = (value: string) =>
    value.replace(/\d/g, "").toLocaleUpperCase();