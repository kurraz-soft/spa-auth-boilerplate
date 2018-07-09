import ActionTypes from '../actions/authActionsTypes';
import jwt_decode from 'jwt-decode';

const InitialState = {
    jwt: "",
    data: {},
    is_guest: true,
    form_error: "",
};

export default function (state = InitialState, action) {
    switch (action.type)
    {
        case ActionTypes.AUTHENTICATE:
            return {
                ...state,
                jwt: action.token,
                data: jwt_decode(action.token),
                is_guest: !action.token,
                form_error: "",
            };
        case ActionTypes.LOGIN_FAILED:
            return {
                ...state,
                form_error: "Wrong login or password",
            };
        case ActionTypes.LOGOUT:
            return {
                ...state,
                jwt: "",
                data: {},
                is_guest: true,
            };
        default:
            return state;
    }
}