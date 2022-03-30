import React from "react"
import s from "./FormsControl.module.css"

const FormControl = ({ input, meta, child, ...props }) => {

    const hasError = meta.touched && meta.error

    return (<div>
        <div>
            {props.child}
        </div>
        <div>
            {hasError && <span className={s.spanError}>{meta.error}</span>}
        </div>
    </div>
    )
}

export const Textarea = ({ input, meta, ...props }) => {

    const hasError = meta.touched && meta.error

    return (
        <>
            {hasError && <div className={s.errorLabelTextarea}>{meta.error}</div>}
            <textarea class={s.textarea} {...input}{...props}/>
            {/* Old style for textarea
             className={s.formControl + ' ' + hasError ? s.error: ''}
            */}
        </>
    )
}


export const Input = ({ input, meta, ...props }) => {

    const hasError = meta.touched && meta.error

    return (<>
        <span>
            <input className={hasError ? s.error : ''} {...input} {...props} />
        </span>
        <span>
            {hasError && <span className={s.errorLabel}>{meta.error}</span>}
        </span>
    </>
    )
}