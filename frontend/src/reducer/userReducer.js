import { CLEAR_ERRORS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_FAIL, LOGOUT_SUCCESS, REGISTER_USER_FAIL, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from "../constant/userConstant"

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: localStorage.getItem('token') ? true : false,
    loading: false
};

export const userReducer = (state = initialState, action) => {

    const { type, payload } = action;

    switch (type) {
        case LOGIN_REQUEST:
        case REGISTER_USER_REQUEST:
            return {
                loading: true,
                isAuthenticated: false,
            }
        case LOGIN_SUCCESS:
        case REGISTER_USER_SUCCESS:
            localStorage.setItem('token', payload.access);
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload,
                token: payload.access
            }
        case LOGIN_FAIL:
        case REGISTER_USER_FAIL:
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                // user: null,
                error: action.payload,
                token: null,
            }
        case LOGOUT_SUCCESS:
            localStorage.removeItem('token');
            return {
                loading: false,
                user: null,
                isAuthenticated: false,
            }
        case LOGOUT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case CLEAR_ERRORS:
            return {
                error: null
            }
        default:
            return state
    }
}