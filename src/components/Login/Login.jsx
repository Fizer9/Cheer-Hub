import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FormsControl/FormsControl";
import { required } from "../utils/validators";
import s from './Login.module.css';
import { connect } from 'react-redux';
import { login } from './../../redux/auth-reducer';
import { Redirect } from "react-router-dom";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'}
                    name={'email'}
                    validate={[required]}
                    component={Input} />
            </div>
            <div>
                <Field placeholder={'Password'}
                    name={'password'}
                    validate={[required]}
                    component={Input}
                    type={'password'} />
            </div>
            <div>
                <Field
                    component={Input}
                    type={'checkbox'}
                    name={'rememberMe'} />
                remember me
            </div>
            <div>
                <button className={s.button}>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return <div className={s.login}>
        <h2>Login</h2>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login} ) (Login)