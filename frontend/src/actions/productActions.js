import axios from "axios";
import { ALL_PRODUCT_FAIL, ALL_PRODUCT_REQUEST, ALL_PRODUCT_SUCCESS, CLEAR_ERRORS, GETSINGLE_PRODUCT_FAIL, GETSINGLE_PRODUCT_REQUEST, GETSINGLE_PRODUCT_SUCCESS, NEW_PRODUCT_FAIL, NEW_PRODUCT_REQUEST, NEW_PRODUCT_SUCCESS, UPDATE_PRODUCT_FAIL, UPDATE_PRODUCT_REQUEST, UPDATE_PRODUCT_SUCCESS } from "../constant/ProductConstant";


export const createProduct = (name, description, price, stock) => async (dispatch) => {
    console.log(name, description, price, stock)
    try {
        dispatch({
            type: NEW_PRODUCT_REQUEST,
        })

        const config = { headers: { "Content-Type": "application/json" } }

        const { data } = await axios.post(`/api/v1/create`, { name, description, price, stock }, config)

        dispatch({
            type: NEW_PRODUCT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: NEW_PRODUCT_FAIL,
            payload: error.response.data.message
        })
    }
}

export const updateProduct = (name, description, price, stock) => async (dispatch) => {
    try {
        dispatch({
            type: UPDATE_PRODUCT_REQUEST,
        })
        const config = { headers: { "Content-Type": "application/json" } }
        console.log("HELLO WORLD")
        const { data } = await axios.put(`/api/v1/update`, { name, description, price, stock }, config)

        dispatch({
            type: UPDATE_PRODUCT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: UPDATE_PRODUCT_FAIL,
            payload: error.response.data.message
        })
    }
}


export const getAllProduct = () => async (dispatch) => {
    try {
        dispatch({
            type: ALL_PRODUCT_REQUEST,
        })

        const { data } = await axios.get(`/api/v1/product`)
        console.log(data)
        dispatch({
            type: ALL_PRODUCT_SUCCESS,
            payload: data.products,
        })
    } catch (error) {
        dispatch({
            type: ALL_PRODUCT_FAIL,
            payload: error.response.data.message
        })
    }
}

export const getSingleProduct = (id) => async (dispatch) => {
    try {
        dispatch({ type: GETSINGLE_PRODUCT_REQUEST })

        const { data } = await axios.get(`/api/v1/single/${id}`)

        dispatch({
            type: GETSINGLE_PRODUCT_SUCCESS,
            payload: data.book
        })
    } catch (error) {
        dispatch({
            type: GETSINGLE_PRODUCT_FAIL,
            payload: error.response.data.message
        })

    }
}

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS })
}