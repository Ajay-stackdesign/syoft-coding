import axios from "axios"
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    CLEAR_ERRORS,
} from "../constant/userConstant"

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: LOGIN_REQUEST,
        })
        const config = { headers: { "Content-Type": "application/json" } }

        const { data } = await axios.post("/api/v1/login", { email, password }, config)

        dispatch({
            type: LOGIN_SUCCESS,
            payload: data.user
        })
    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response.data.message
        })
    }
}

export const register = (username, email, password, phone, role) => async (dispatch) => {
    try {
        dispatch({ type: REGISTER_USER_REQUEST });

        const config = { headers: { "Content-Type": "application/json" } };

        const { data } = await axios.post(`/api/v1/register`, { username, email, password, phone, role }, config);

        dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user });
    } catch (error) {
        dispatch({
            type: REGISTER_USER_FAIL,
            payload: error.response.data.message,
        });
    }
};

// export const register = (username, email, password, phone, role) => async (dispatch) => {
//     // console.log(userData)
//     try {
//         dispatch({ type: REGISTER_USER_REQUEST })

//         const config = { headers: { "Content-Type": "application/json" } }
//         console.log("hello world", "=========")
//         const { data } = await axios.post("/api/v1/register", { username, email, password, phone, role }, config)
//         console.log(data)
//         console.log("data", "data=========")
//         dispatch({
//             type: REGISTER_USER_SUCCESS,
//             payload: data
//         })
//     } catch (error) {
//         dispatch({
//             type: REGISTER_USER_FAIL,
//             payload: error.response.data.message
//         })
//     }
// }

export const logout = () => async (dispatch) => {
    try {
        await axios.get(`/api/v1/logout`)
        dispatch({ type: LOGOUT_SUCCESS })
    } catch (error) {
        dispatch({
            type: LOGOUT_FAIL,
            payload: error.response.data.message
        })
    }
}


export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};