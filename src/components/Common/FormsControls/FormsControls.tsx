import React, {HTMLInputTypeAttribute} from 'react';
import {WrappedFieldInputProps} from "redux-form";
import {WrappedFieldMetaProps} from "redux-form/lib/Field";
import s from './FormsControls.module.css'

type FormsControlsType = {
    input: WrappedFieldInputProps
    meta: WrappedFieldMetaProps
    placeholder?: string
    type?: HTMLInputTypeAttribute | undefined;
    autofocus?: boolean
    children?: JSX.Element
}
const FormControl = ({input, meta, ...props}: FormsControlsType) => {
    const hasError = meta.touched && meta.error

    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : ' ')}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = ({input, meta, ...props}: FormsControlsType) => {
    return <FormControl input={input} meta={meta} {...props}><textarea {...input} {...props}/></FormControl>
}

export const Input = ({input, meta, ...props}: FormsControlsType) => {
    return <FormControl input={input} meta={meta} {...props}><input {...input} {...props}/></FormControl>
}
