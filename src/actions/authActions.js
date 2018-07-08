import axios from '../utils/axios';
import ActionTypes from './authActionsTypes';

export function authenticate() {
    return function (dispatch) {
        return axios.get('http://php-docker.local/api/auth/v1/auth')
            .then((response) => {
                dispatch(authenticateResult(response.data.token));
                return Promise.resolve();
            })
            .catch(reason => {
                dispatch(logout());
                return Promise.reject(reason);
            });
    }
}

function authenticateResult(token) {
    return {
        type: ActionTypes.AUTHENTICATE,
        token,
    }
}

export function login(login, password) {
    return function (dispatch) {
        dispatch({
            type: ActionTypes.REGISTER
        });
        return axios.get('http://php-docker.local/api/auth/v1/login?login='+login+'&password='+password)
            .then(response => {
                dispatch(authenticateResult(response.data.token));
                return Promise.resolve();
            })
            .catch(reason => {
                dispatch(loginFail());
                return Promise.reject(reason);
            })
    }
}

export function loginFail() {
    return {
        type: ActionTypes.LOGIN_FAILED,
    }
}

export function logout() {
    return {
        type: ActionTypes.LOGOUT,
    };
}

export function register(username, password) {
    return function (dispatch) {
        dispatch({
            type: ActionTypes.REGISTER
        });
        return axios.post('http://php-docker.local/api/auth/v1/register',{username, password})
            .then(response => {
                dispatch(login(username,password));

                return Promise.resolve();
            })
            .catch(reason => {
                dispatch({
                    type: ActionTypes.REGISTER_FAIL,
                });

                return Promise.reject("Error");
            });
    }
}