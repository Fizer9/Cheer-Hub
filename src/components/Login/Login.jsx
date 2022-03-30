import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FormsControl/FormsControl";
import { required } from "../utils/validators";
import s from './Login.module.css';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'}
                    name={'login'}
                    validate={[required]}
                    component={Input} />
            </div>
            <div>
                <Field placeholder={'Password'}
                    name={'password'}
                    validate={[required]}
                    component={Input} />
            </div>
            <div>
                <Field
                    component={Input}
                    type={'checkbox'}
                    name={'rememberMe'} />
                remember me
            </div>
            <div>
                <button className={s.button}>Log in</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }

    return <div className={s.login}>
        <h2>Log in</h2>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

export default Login