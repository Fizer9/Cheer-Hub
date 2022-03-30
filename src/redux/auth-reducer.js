import { authAPI } from "../api/api"

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
                isAuth: true
            }
        default:
            return state
    }
}


export const setAuthUserData = (id, email, login, isAuth) => ({ type: SET_USER_DATA, payload:
    { id, email, login, isAuth } })


export const auth = () => {
    return (dispatch) => {
        authAPI.auth().then(response => {
            if (response.data.resultCode === 0) {
                let { id, login, email } = response.data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        })
    }
}
export const login = (email, password, rememberMe) => (dispatch) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData())
            }
        })
    }
}
export const logout = () => (dispatch) => {
    return (dispatch) => {
        authAPI.logout().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
    }
}


export default authReducer

